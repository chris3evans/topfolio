import { createTheme, ThemeProvider, styled, responsiveFontSizes } from '@mui/material/styles';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import { Theme } from '@topfolio/api-interfaces';
export let workExperienceFormTheme = createTheme({
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
workExperienceFormTheme = responsiveFontSizes(workExperienceFormTheme);
// theme: Theme
export const themeGenerator = (theme: Theme) => {
  changeCssVariablesByTheme(theme);
  return createTheme({
    palette: {
      primary: {
        main: theme.primary,
      },
      secondary: {
        main: theme.secondary,
      },
      warning: { main: theme.tertiary },
    },
  });
};
export const changeCssVariablesByTheme = (theme: Theme) => {
  const root: HTMLElement = document.querySelector(':root')!;
  root.style.setProperty('--primary-background', theme.background);
  root.style.setProperty('--secondary-background', theme.background_secondary);
  root.style.setProperty('--primary-text', '#151619');
  root.style.setProperty('--primary', theme.primary);
};
