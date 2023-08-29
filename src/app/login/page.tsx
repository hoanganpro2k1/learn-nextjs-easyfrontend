'use client'

import LoginForm from '@/components/auth/login-form';
import { useAuth } from '@/hooks/use-auth';
import { Button, Paper, Typography } from '@mui/material';
import React from 'react'
import { authApi } from '../../../api-client/auth-api';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth({
    revalidateOnMount: false
  });

  const handleLoginSubmit = async (payload: LoginPayload) => {
    try {
      await login(payload);
      router.push('/')
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  return (
    <Box>
      <Paper elevation={4} sx={{
        mx: 'auto',
        mt: 8,
        p: 4,
        maxWidth: '480px',
        textAlign: 'center'
      }}>
        <Typography component={'h1'} variant='h5' mb={3}>Login page</Typography>
        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  );
};

export default LoginPage;
