'use client'

import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../form/input-field';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const handleLoginSubmit = (values: any) => {
    console.log('values:', values)
  }

  return (
    <Box component={'form'} onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name='username' control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name='password'
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(show => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Button type='submit' variant='contained'>Login</Button>
    </Box>
  );
};

export default LoginForm;
