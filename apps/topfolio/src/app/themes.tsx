import { createTheme, ThemeProvider, styled, responsiveFontSizes } from '@mui/material/styles';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import { Theme } from '@topfolio/api-interfaces';
export let mainTheme = createTheme({
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
mainTheme = responsiveFontSizes(mainTheme);
// theme: Theme
export const themeGenerator = (theme: Theme) => {
  changeCssVariablesByTheme(theme);
  mainTheme.palette.primary.main = theme.primary;
  mainTheme.palette.secondary.main = theme.secondary;
  mainTheme.palette.warning.main = theme.tertiary;
};
export const changeCssVariablesByTheme = (theme: Theme) => {
  const root: HTMLElement = document.querySelector(':root')!;
  root.style.setProperty('--primary-background', theme.background);
  root.style.setProperty('--secondary-background', theme.background_secondary);
  root.style.setProperty('--primary-text', '#151619');
  root.style.setProperty('--primary', theme.primary);
};
