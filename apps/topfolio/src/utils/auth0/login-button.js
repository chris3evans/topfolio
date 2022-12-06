import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button from '@mui/material/Button';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      prompt: 'login',
      appState: {
        returnTo: '/dashboard/about-me',
      },
    });
  };

  return (
    <Button color="primary" variant="contained" onClick={handleLogin}>
      Get Started
    </Button>
  );
};
