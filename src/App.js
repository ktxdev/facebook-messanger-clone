import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import db from './firebase.js';
import './App.css';
import Message from './Message';
import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';

function App() {

  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(async () => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      const msgs = [];
      snapshot.forEach((doc) => {
        const data = doc.data()
        msgs.push({ id: doc.id, username: data.username, text: data.text })
      });
      setMessages(msgs)
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])


  const sendMessage = async (e) => {
    e.preventDefault()
    const message = { username, text: input, timestamp: serverTimestamp() }

    addDoc(collection(db, "messages"), message);

    setMessages([message, ...messages])
    setInput('')
  }

  return (
    <div className="App">
      <h2>Messenger</h2>
      <form>
        <FormControl>
          <InputLabel htmlFor='message'>Enter message</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage} >Send Message</Button>
        </FormControl>
      </form>
      {/* Messages */}
      {messages.map(message => <Message key={message.id} username={username} message={message} />)}
    </div>
  );
}

export default App;
