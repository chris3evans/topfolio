import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import muiStyles from './styles-current-color-theme';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface CurrentColorThemeProps {}

export function CurrentColorTheme(props: CurrentColorThemeProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const mediaQuery1200 = useMediaQuery('(max-width:1200px)');
  const mediaQuery900 = useMediaQuery('(max-width:900px)');
  const mediaQuery600 = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={
        mediaQuery900
          ? muiStyles['existingThemeContainer-900']
          : muiStyles['existingThemeContainer']
      }
    >
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
              Your Current Color Theme
            </Typography>
          </Box>
          <Box sx={muiStyles['existingColorTheme']}>
            <Box
              sx={
                mediaQuery600
                  ? {
                      backgroundColor: `${userDetails.portfolio.theme.background}`,
                      height: '7.5rem',
                      width: '100%',
                    }
                  : {
                      backgroundColor: `${userDetails.portfolio.theme.background}`,
                      height: '12.5rem',
                      width: '100%',
                    }
              }
            ></Box>
            <Box
              sx={
                mediaQuery600
                  ? {
                      backgroundColor: `${userDetails.portfolio.theme.primary}`,
                      height: '7.5rem',
                      width: '100%',
                    }
                  : {
                      backgroundColor: `${userDetails.portfolio.theme.primary}`,
                      height: '12.5rem',
                      width: '100%',
                    }
              }
            ></Box>
            <Box
              sx={
                mediaQuery600
                  ? {
                      backgroundColor: `${userDetails.portfolio.theme.secondary}`,
                      height: '7.5rem',
                      width: '100%',
                    }
                  : {
                      backgroundColor: `${userDetails.portfolio.theme.secondary}`,
                      height: '12.5rem',
                      width: '100%',
                    }
              }
            ></Box>
            <Box
              sx={
                mediaQuery600
                  ? {
                      backgroundColor: `${userDetails.portfolio.theme.tertiary}`,
                      height: '7.5rem',
                      width: '100%',
                    }
                  : {
                      backgroundColor: `${userDetails.portfolio.theme.tertiary}`,
                      height: '12.5rem',
                      width: '100%',
                    }
              }
            ></Box>
            <Box
              sx={
                mediaQuery600
                  ? {
                      backgroundColor: `${userDetails.portfolio.theme.background_secondary}`,
                      height: '7.5rem',
                      width: '100%',
                    }
                  : {
                      backgroundColor: `${userDetails.portfolio.theme.background_secondary}`,
                      height: '12.5rem',
                      width: '100%',
                    }
              }
            ></Box>
          </Box>{' '}
        </>
      )}
    </Box>
  );
}

export default CurrentColorTheme;
