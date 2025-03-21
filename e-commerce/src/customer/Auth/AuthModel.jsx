import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline:"none",
  boxShadow: 24,
  p: 4,
};

export default function AuthModel({signin,handleClose}) {
    const location = useLocation();
    console.log(location);
  return (
    <div>
      <Modal
        open={signin}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            {location.pathname==='/login'?<LoginForm/>:<RegisterForm/>}
        </Box>
      </Modal>
    </div>
  );
}
