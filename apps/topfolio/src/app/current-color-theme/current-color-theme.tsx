import styles from './current-color-theme.module.css';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import muiStyles from './styles-current-color-theme';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { Theme } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface CurrentColorThemeProps {}

export function CurrentColorTheme(props: CurrentColorThemeProps) {
  const { userDetails, setUser } = useContext(UserContext);

  return (
    <Box sx={muiStyles['existingThemeContainer']}>
      {userDetails.portfolio.theme.primary === '' ? (
        <Box sx={muiStyles['noExistingThemeHeading']}>
          <Typography variant="h6" sx={muiStyles['h6']}>
            No Color Theme Selected
          </Typography>
          <Typography variant="body1" sx={muiStyles['text']}>
            Generate a color palette and click "SAVE" to apply a color theme
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={muiStyles['existingThemeHeading']}>
            <Typography variant="h6" sx={muiStyles['h6']}>
              Your Current Portfolio Theme
            </Typography>
          </Box>
          <Box sx={muiStyles['existingColorTheme']}>
            <Box
              sx={{
                backgroundColor: `${userDetails.portfolio.theme.background}`,
                height: '12.5rem',
                width: '100%',
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: `${userDetails.portfolio.theme.primary}`,
                height: '12.5rem',
                width: '100%',
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: `${userDetails.portfolio.theme.secondary}`,
                height: '12.5rem',
                width: '100%',
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: `${userDetails.portfolio.theme.tertiary}`,
                height: '12.5rem',
                width: '100%',
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: `${userDetails.portfolio.theme.background_secondary}`,
                height: '12.5rem',
                width: '100%',
              }}
            ></Box>
          </Box>{' '}
        </>
      )}
    </Box>
  );
}

export default CurrentColorTheme;
