import {
  createTheme,
  ThemeProvider,
  styled,
  responsiveFontSizes,
} from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { Theme } from '@topfolio/api-interfaces';

export let mainTheme = createTheme({
  palette: {
    primary: {
      main: '#39CBD7',
    },
  },
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
export const themeGenerator = (theme: Theme) => {
  changeCssVariablesByTheme(theme);
  mainTheme.palette.primary.main = theme.primary;
  mainTheme.palette.secondary.main = theme.secondary;
  mainTheme.palette.warning.main = theme.tertiary;
  mainTheme.typography.fontFamily = [...theme.font].join(',');
  mainTheme.typography.body1.fontFamily = [...theme.font].join(',');
  mainTheme.typography.caption.fontFamily = [...theme.font].join(',');
  mainTheme.typography.button.fontFamily = [...theme.font].join(',');
  mainTheme.typography.body2.fontFamily = [...theme.font].join(',');
  mainTheme.typography.subtitle1.fontFamily = [...theme.font].join(',');
  mainTheme.typography.subtitle2.fontFamily = [...theme.font].join(',');
  mainTheme.typography.h3.fontFamily = [...theme.font].join(',');
  mainTheme.typography.h4.fontFamily = [...theme.font].join(',');
  mainTheme.typography.h5.fontFamily = [...theme.font].join(',');
  mainTheme.typography.h6.fontFamily = [...theme.font].join(',');
};
export const changeCssVariablesByTheme = (theme: Theme) => {
  const root: HTMLElement = document.querySelector(':root')!;
  const body: HTMLElement = document.querySelector('body')!;
  root.style.setProperty('--primary-background', theme.background);
  root.style.setProperty('--secondary-background', theme.tertiary);
  root.style.setProperty('--primary-text', theme.background_secondary);
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--font', [...theme.font].join(','));
  body.style.setProperty('font-family', [...theme.font].join(','));
  body.style.setProperty('font-family', [...theme.font].join(','));
};
