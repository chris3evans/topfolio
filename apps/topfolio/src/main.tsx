import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { workExperienceFormTheme } from './app/themes';

import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={workExperienceFormTheme}>
    <App />
  </ThemeProvider>
);
