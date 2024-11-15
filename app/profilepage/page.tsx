'use client';

import React, { useState } from 'react';
import { Box, Avatar, TextField, IconButton, Button, Typography, Paper } from '@mui/material';
import { Edit as EditIcon, CameraAlt as CameraIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom Dark Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1a1a1a',
      paper: '#333',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#007bff',
    },
  },
});

const ProfilePage: React.FC = () => {
  const [profilePic, setProfilePic] = useState('/default-profile.png');
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [username, setUsername] = useState('johndoe');
  const [phoneNumber, setPhoneNumber] = useState('+1 234-567-890');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [viewMode, setViewMode] = useState<'edit' | 'summary'>('summary');

  const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newPic = URL.createObjectURL(event.target.files[0]);
      setProfilePic(newPic);
    }
  };

  const handleSave = () => {
    setViewMode('summary'); // Switch to summary view on save
  };

  const handleEdit = () => {
    setViewMode('edit'); // Switch back to edit view
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: '2rem', minHeight: '80vh',  mt:10 }}>
        {viewMode === 'edit' ? (
          // Edit View
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#ffffff' }}>
            <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
              <Avatar src={profilePic} sx={{ width: 120, height: 120 }} />
              <IconButton
                component="label"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: '#007bff',
                  color: '#ffffff',
                  width: 30,
                  height: 30,
                }}
              >
                <CameraIcon />
                <input type="file" hidden accept="image/*" onChange={handleProfilePicChange} />
              </IconButton>
            </Box>

            {/* Editable Fields */}
            <Box sx={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Box display="flex" alignItems="center">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  InputLabelProps={{ style: { color: '#ffffff' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Box>

              <Box display="flex" alignItems="center">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: '#ffffff' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Box>

              <Box display="flex" alignItems="center">
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputLabelProps={{ style: { color: '#ffffff' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Box>

              <Box display="flex" alignItems="center">
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  InputLabelProps={{ style: { color: '#ffffff' } }}
                  sx={{ input: { color: '#ffffff' } }}
                />
              </Box>

              <Box display="flex" alignItems="center">
                <TextField
                  label="Bio"
                  variant="outlined"
                  multiline
                  rows={3}
                  fullWidth
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  InputLabelProps={{ style: { color: '#ffffff' } }}
                  sx={{ input: { color: '#ffffff' }, textarea: { color: '#ffffff' } }}
                />
              </Box>
            </Box>

            <Button variant="contained" color="primary" sx={{ marginTop: '2rem', padding: '0.5rem 2rem' }} onClick={handleSave}>
              Save All
            </Button>
          </Box>
        ) : (
          // Summary View
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#ffffff' }}>
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                maxWidth: 400,
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#0E0A36',
                color: '#ffffff',
              }}
            >
              <Avatar src={profilePic} sx={{ width: 100, height: 100, margin: 'auto', marginBottom: '1rem' }} />
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>{fullName}</Typography>
              <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}><strong>Email:</strong> {email}</Typography>
              <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}><strong>Username:</strong> {username}</Typography>
              <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}><strong>Phone Number:</strong> {phoneNumber}</Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}><strong>Bio:</strong> {bio}</Typography>
              <IconButton onClick={handleEdit} sx={{ color: '#007bff' }}>
              <EditIcon /> Edit
            </IconButton>
            </Paper>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
