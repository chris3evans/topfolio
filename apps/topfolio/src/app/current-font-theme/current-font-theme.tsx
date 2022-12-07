import styles from './current-font-theme.module.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import muiStyles from './styles-current-font-theme';
import WebFont from 'webfontloader';
import { useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface CurrentFontThemeProps {}

export function CurrentFontTheme(props: CurrentFontThemeProps) {
  const { userDetails, setUser } = useContext(UserContext);

  useEffect(() => {
    const fonts = userDetails.portfolio.theme.font;

    WebFont.load({
      google: {
        families: fonts,
      },
    });
  }, [userDetails.portfolio.theme.font]);

  const mediaQuery1200 = useMediaQuery('(max-width:1200px)');
  const mediaQuery900 = useMediaQuery('(max-width:900px)');
  const mediaQuery600 = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      {userDetails.portfolio.theme.font[0] === 'Arial' ? (
        <Box sx={muiStyles['noExistingThemeHeading']}>
          <Typography variant="h6" sx={muiStyles['h6']}>
            Default Arial Font Selected
          </Typography>
          <Typography variant="body1" sx={muiStyles['text']}>
            Click on the text below to generate a random font and then click
            save to add this font to your portfolio
          </Typography>
        </Box>
      ) : (
        <Box sx={muiStyles['viewExistingFontTheme']}>
          <Box>
            <Typography variant="h6" sx={muiStyles['h6']}>
              Your Current Font Theme
            </Typography>
          </Box>
          <Box
            sx={
              mediaQuery900
                ? muiStyles['existingThemeHeading-900']
                : muiStyles['existingThemeHeading']
            }
          >
            <Typography
              variant="body1"
              sx={
                mediaQuery600
                  ? muiStyles['currentFont-600']
                  : muiStyles['currentFont']
              }
            >
              {
                // @ts-ignore
                userDetails.portfolio.theme.font[0]
              }
            </Typography>
            <Typography
              variant="body2"
              sx={
                mediaQuery600
                  ? {
                      fontFamily: `${
                        // @ts-ignore
                        userDetails.portfolio.theme.font[0]
                      }`,
                      fontSize: '2.4rem',
                      color: 'black',
                    }
                  : {
                      fontFamily: `${
                        // @ts-ignore
                        userDetails.portfolio.theme.font[0]
                      }`,
                      fontSize: '3rem',
                      color: 'black',
                    }
              }
            >
              {
                // @ts-ignore
                userDetails.portfolio.theme.font[0]
              }
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CurrentFontTheme;
