import {
  createTheme,
  ThemeProvider,
  styled,
  responsiveFontSizes,
} from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { Theme } from '@topfolio/api-interfaces';
import WebFont from 'webfontloader';

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
  if (!theme.font.length) theme.font = ['Arial'];

  changeCssVariablesByTheme(theme);
  mainTheme.palette.primary.main = theme.primary;
  mainTheme.palette.secondary.main = theme.secondary;
  mainTheme.palette.warning.main = theme.tertiary;
  mainTheme.typography.fontFamily = [...theme.font].join(',');
};
export const changeCssVariablesByTheme = (theme: Theme) => {
  const root: HTMLElement = document.querySelector(':root')!;
  const body: HTMLElement = document.querySelector('body')!;
  WebFont.load({
    google: {
      families: [...theme.font],
    },
  });
  root.style.setProperty('--primary-background', theme.background);
  root.style.setProperty('--secondary-background', theme.background_secondary);
  root.style.setProperty('--primary-text', '#151619');
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--primary', theme.primary);
  body.style.setProperty('font-family', theme.font.join(','));
};
