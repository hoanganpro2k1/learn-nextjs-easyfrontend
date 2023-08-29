'use client'

import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../form/input-field';
import { Button, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  // Nếu form có nhiều trường thì tạo file riêng
  // const schema = useLoginFormSchema();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Please enter a username')
      .min(4, 'Username is required to have at least 4 character'),

    password: yup
      .string()
      .required('Please enter a password')
      .min(6, 'Password is required to have at least 6 character')
  })

  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema)
  })

  const handleLoginSubmit = async (payload: LoginPayload) => {
    await onSubmit?.(payload);
  }

  return (
    <Box component={'form'} onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name='username' label='Username' control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name='password'
        label='Password'
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

      <Button
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress color='inherit' size={'1em'} /> : null}
        type='submit'
        variant='contained'
        fullWidth
        sx={{ mt: 3 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
