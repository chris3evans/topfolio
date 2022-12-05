import styles from './form-font-theme.module.css';
import muiStyles from './styles-form-font-theme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { fontsApi } from '../../utils/ApiService';
import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';

/* eslint-disable-next-line */
export interface FormFontThemeProps {
  token: string;
}

export function FormFontTheme(props: FormFontThemeProps) {
  const [fontSelection, setFontSelection] = useState([]);
  const [chosenFont, setChosenFont] = useState('');

  useEffect(() => {
    getFontThemes();
  }, []);

  const getFontThemes = async function () {
    try {
      const fontResponse: any = await fontsApi();
      setFontSelection(fontResponse.items);
    } catch (error) {
      console.log(error);
    }
  };

  const selectRandomFont = function () {
    const randomIndex = Math.floor(Math.random() * fontSelection.length);
    const randomFont: any = fontSelection.find((font: any, index) => {
      if (index === randomIndex) {
        return font;
      } else {
        return;
      }
    });

    WebFont.load({
      google: {
        families: [randomFont.family],
      },
      fontactive: () => {
        setChosenFont(randomFont.family);
      },
    });
  };

  const onSubmitHandler = function (event: any) {};

  return (
    <form className={styles['font-theme-form']} onSubmit={onSubmitHandler}>
      <Box sx={muiStyles['fontSelection']} onClick={selectRandomFont}>
        <input
          type="text"
          defaultValue="You can change this text!"
          style={{
            fontFamily: `${chosenFont}`,
          }}
          className={styles['font-input']}
        ></input>
      </Box>
      <Box sx={muiStyles['current']}>
        <Box>
          <Typography sx={muiStyles['currentFont']} variant="body1">
            {chosenFont}
          </Typography>
        </Box>
        <Box sx={muiStyles['saveButtonContainer']}>
          <Button
            sx={muiStyles['saveFontButton']}
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default FormFontTheme;
