'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'next/navigation';

const dummyChat = [
  { question: "Hey, First question...?", answer: "" },
  { question: "What’s your project goal?", answer: "" },
  { question: "Who is your target audience?", answer: "" },
];

const ChatPage = () => {
  const {type} = useParams()
  const [chatIndex, setChatIndex] = useState(0);
  const [messages, setMessages] = useState(dummyChat);
  const [userMessage, setUserMessage] = useState('');

  console.log("type", type)

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    const updatedMessages = [...messages];
    updatedMessages[chatIndex].answer = userMessage;
    setMessages(updatedMessages);
    setUserMessage('');

    if (chatIndex < messages.length - 1) {
      setTimeout(() => {
        setChatIndex(chatIndex + 1);
      }, 1000);
    }
    else {
      // Redirect to a new page after the last question
      setTimeout(() => {
        window.location.href = `/agentsummary?type=${type}`; // Replace '/nextPage' with your desired route
      }, 1000);
    }
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
        padding: 4,
      }}
    >
      {/* Dynamic Title Based on Route */}
      <Typography variant="h4" className='font-roboto' sx={{ color: '#fff', mb: 4 }}>
        {type === 'team' ? 'Team Agent Chat' : 'Single Agent Chat'}
      </Typography>

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
          height: '50vh',
        }}
      >
        {/* Display previous Q&A */}
        {messages.slice(0, chatIndex + 1).map((msg, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 2, flexDirection: 'column' }}>
            {/* Agent's Question */}
            <Box
              sx={{
                alignSelf: 'flex-start',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '16px 16px 16px 0',
                padding: '8px 16px',
                maxWidth: '70%',
              }}
            >
              <Typography>{msg.question}</Typography>
            </Box>

            {/* User's Answer */}
            {msg.answer && (
              <Box
                sx={{
                  alignSelf: 'flex-end',
                  backgroundColor: '#6a0dad',
                  color: '#fff',
                  borderRadius: '16px 16px 0 16px',
                  padding: '8px 16px',
                  maxWidth: '70%',
                  mt: 1,
                }}
              >
                <Typography>{msg.answer}</Typography>
              </Box>
            )}
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
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          sx={{
            backgroundColor: '#0D0C19',
            borderRadius: '8px',
            input: { color: '#fff' },
          }}
        />
        <IconButton
          onClick={handleSendMessage}
          sx={{ color: '#6a0dad', ml: 2 }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};


export default ChatPage;
