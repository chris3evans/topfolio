import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';

export const workExperienceFormTheme = createTheme({
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          fontSize: '4rem !important',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.8rem',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
        },
      },
    },
  },
});