import styles from './current-font-theme.module.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import muiStyles from './styles-current-font-theme';
import WebFont from 'webfontloader';

/* eslint-disable-next-line */
export interface CurrentFontThemeProps {}

export function CurrentFontTheme(props: CurrentFontThemeProps) {
  const { userDetails, setUser } = useContext(UserContext);

  useEffect(() => {
    WebFont.load({
      google: {
        families: userDetails.portfolio.theme.font,
      },
    });
  }, [userDetails.portfolio.theme.font]);

  return (
    <Box>
      {userDetails.portfolio.theme.font[0] ===
      'Arial, Helvetica, sans-serif' ? (
        <Box sx={muiStyles['noExistingThemeHeading']}>
          <Typography variant="h6" sx={muiStyles['h6']}>
            No Custom Font - Default Arial Font Selected
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
          <Box sx={muiStyles['existingThemeHeading']}>
            <Typography variant="body1" sx={muiStyles['currentFont']}>
              {userDetails.portfolio.theme.font}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: `${userDetails.portfolio.theme.font}`,
                fontSize: '3rem',
                color: 'black',
              }}
            >
              {userDetails.portfolio.theme.font}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CurrentFontTheme;
