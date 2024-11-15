import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

type WarningPopupProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const WarningPopup: React.FC<WarningPopupProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="warning-dialog-title"
      aria-describedby="warning-dialog-description"
      PaperProps={{
        style: {
          backgroundColor: '#09071B',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
          color: 'white'
        },
      }}
    >
      <DialogTitle id="warning-dialog-title">Unsaved Changes</DialogTitle>
      <DialogContent>
        <DialogContentText className='text-white' id="warning-dialog-description">
           Are you sure you want to go back? All unsaved changes will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Yes, Go Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningPopup;
