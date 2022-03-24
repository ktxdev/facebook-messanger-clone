import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      {/* Input */}
      <input value={input} onChange={e => setInput(e.target.value)} />
      {/* Button */}
      <button>Send Message</button>
      {/* Messages */}
    </div>
  );
}

export default App;
