import React from 'react'
import { Grid2, Button,TextField } from '@mui/material';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const handleSubmit = (event)=>
  {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
        email:data.get('email'),
        password:data.get('password')
    }
    console.log(userData);
  }
  const navigate = useNavigate();
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid2 container spacing={3}>
                <Grid2 item size={12}>
                <TextField
                    required
                    id='email'
                    name='email'
                    label= 'Email'
                    fullWidth
                    autoComplete='given-name'
                    />
                </Grid2>
                <Grid2 item size={12}>
                <TextField
                    required
                    id='password'
                    name='password'
                    label= 'Password'
                    fullWidth
                    autoComplete='given-name'
                    />
                </Grid2>
                <Grid2 item size={12}>
                <Button type='submit' className='w-full' sx={{color:'white',bgcolor:'#1565c0'}}>Login</Button>
                </Grid2>
            </Grid2>
        </form>      
        <div className='flex flex-col mt-3 items-center'>
            <div className='flex flex-row items-center space-x-2'>
                <p>If you don't have account? </p>
                <button className='text-blue-500' onClick={()=>navigate('/register')}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm