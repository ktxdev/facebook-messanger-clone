import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './Message.css'

const Message = ({ username, message }) => {

    const isUser = username === message.username;

    return (
        <div className={`message ${ isUser && 'message__user'}`}>
            { !isUser && <Typography className='message__username' variant='p' component="p">
                {message.username}
            </Typography>}
            <Card className='message_card'>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message