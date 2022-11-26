import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Button color="error" size="small" variant="contained" onClick={handleLogout}>
      <LogoutIcon />
    </Button>
  );
};
