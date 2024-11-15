import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Link from 'next/link';

const LoginPopup = ({ open, onClose }: any) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    if (step === 1 && email) setStep(2);
  };

  const handleLogin = () => {

  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: '#09071B',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {/* Dialog Title */}
      <DialogTitle sx={{ textAlign: 'center', position: 'relative', mb: 2 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 'bold', color: '#fff' }}>
          Welcome Back
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', top: 0, right: 3, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent>
        <form>
          {/* Email Step */}
          {step === 1 && (
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 3,
                input: { color: '#fff' },
                label: { color: '#fff' },
                backgroundColor: '#3D3D47',
                borderRadius: '8px',
              }}
            />
          )}

          {/* Password Step */}
          {step === 2 && (
            <>
              <TextField
                fullWidth
                variant="outlined"
                label="Email Address"
                value={email}
                disabled
                sx={{
                  mb: 2,
                  input: { color: '#fff' },
                  label: { color: '#bbb' },
                  backgroundColor: '#3D3D47',
                  borderRadius: '8px',
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  mb: 2,
                  input: { color: '#fff' },
                  label: { color: '#bbb' },
                  backgroundColor: '#2a2a32',
                  borderRadius: '8px',
                }}
              />
              <Typography sx={{ color: '#bbb', mb: 3, textAlign: 'right', cursor: 'pointer' }}>
                Forgot password?
              </Typography>
            </>
          )}

          {/* Continue / Log In Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={step === 1 ? handleContinue : handleLogin}
            sx={{
              backgroundColor: '#5a5cff',
              color: '#fff',
              height: '3rem',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#4949cc' },
              mb: 3,
            }}
          >
            {step === 1 ? 'Continue' : 'Log In'}
          </Button>

          {/* Sign Up Link */}
          <Typography align="center" sx={{ color: '#bbb', mb: 3 }}>
            Don’t have an account?{' '}
            <Link href="/signup" style={{ color: '#5a5cff' }}>
              Sign Up
            </Link>
          </Typography>

          {/* Divider */}
          <Divider sx={{ borderColor: '#444', mb: 3 }} />

          {/* Social Login Buttons */}
          <Button
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              backgroundColor: '#ffffff',
              color: '#000',
              borderRadius: '25px',
              height: 50,
              mb: 2,
              '&:hover': { backgroundColor: '#D1D5F9' },
            }}
          >
            Continue with Google
          </Button>
          <Button
            fullWidth
            startIcon={<AppleIcon />}
            sx={{
              backgroundColor: '#2a2a32',
              color: '#fff',
              height: 50,
              borderRadius: '25px',
              '&:hover': { backgroundColor: '#3a3a44' },
            }}
          >
            Continue with Apple
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPopup;
