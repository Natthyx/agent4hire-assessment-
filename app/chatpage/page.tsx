'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'next/navigation';
type Message = {
    text: string;
    sender: 'user' | 'bot';
  };
  
const Chat = () => {
  const { type } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  console.log('type', type);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add the user's message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, sender: 'user' },
    ]);
    
    // Clear input field
    setInputMessage('');

    // Simulate a bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#080714',
        padding: '20px',
        marginTop:'50px'
      }}
    >

      {/* Chat Container */}
      <Box
        sx={{
          width: '90%',
          maxWidth: '800px',
          backgroundColor: '#0D0C19',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          height: '70vh',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: message.sender === 'user' ? '#6a0dad' : '#32334A',
                color: message.sender === 'user' ? '#fff' : '#fff',
                borderRadius: message.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                padding: '12px 18px',
                maxWidth: '70%',
              }}
            >
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
                {message.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Input for the user’s answer */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          maxWidth: '800px',
          backgroundColor: '#0D0C19',
          borderRadius: '16px',
          padding: '8px',
          mt: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          sx={{
            backgroundColor: '#0D0C19',
            borderRadius: '8px',
            input: { color: '#fff' },
          }}
        />
        <IconButton onClick={handleSendMessage} sx={{ color: '#6a0dad', ml: 2 }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chat;
