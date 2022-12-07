import styles from './form-color-theme.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GenerateIcon from '@mui/icons-material/Cached';
import muiStyles from './styles-form-color-theme';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { colorApi } from '../../utils/ApiService';
import { updateUser } from '../../utils/ApiService';
import ColorCardItemNoMemo from '../color-card-item/color-card-item';
import { useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface FormColorThemeProps {
  token: string;
}

const convertRgbToHex = function (rgbArr: Number[]) {
  const result = rgbArr
    .map((rgb: any) => {
      return rgb.toString(16);
    })
    .join('');
  return result;
};

const ColorCardItem = React.memo(ColorCardItemNoMemo);

export function FormColorTheme(props: FormColorThemeProps) {
  const [colorBackground, setColorBackground] = useState('');
  const [colorPrimary, setColorPrimary] = useState('');
  const [colorSecondary, setColorSecondary] = useState('');
  const [colorTertiary, setColorTertiary] = useState('');
  const [colorBackground2, setColorBackground2] = useState('');

  useEffect(() => {
    changeColorSelection();
  }, []);

  const { userDetails, setUser } = useContext(UserContext);

  const mediaQuery900 = useMediaQuery('(max-width:900px)');
  const mediaQuery600 = useMediaQuery('(max-width:600px)');

  const changeColorSelection = async function () {
    try {
      const colorResults: any = await colorApi();

      const formattedResults = {
        backgroundColor: convertRgbToHex(colorResults.result[0]),
        primaryColor: convertRgbToHex(colorResults.result[1]),
        secondaryColor: convertRgbToHex(colorResults.result[2]),
        tertiaryColor: convertRgbToHex(colorResults.result[3]),
        backgroundColor2: convertRgbToHex(colorResults.result[4]),
      };

      setColorBackground(formattedResults.backgroundColor);
      setColorPrimary(formattedResults.primaryColor);
      setColorSecondary(formattedResults.secondaryColor);
      setColorTertiary(formattedResults.tertiaryColor);
      setColorBackground2(formattedResults.backgroundColor2);
    } catch (error) {
      const backUpColorTheme = {
        backgroundColor: '#1f2125',
        primaryColor: '#1e1f23',
        secondaryColor: '#ffffff',
        tertiaryColor: '#ffff00',
        backgroundColor2: '#39CBD7',
      };
      console.log('error with color api ', error);
    }
  };

  const onGenerateHandler = function () {
    changeColorSelection();
  };

  const onSubmitHandler = async function (event: any) {
    try {
      event.preventDefault();

      const colorData = {
        background: event.target.backgroundColor.value,
        primary: event.target.primaryColor.value,
        secondary: event.target.secondaryColor.value,
        tertiary: event.target.tertiaryColor.value,
        background_secondary: event.target.secondaryBackgroundColor.value,
        font: userDetails.portfolio.theme.font,
      };

      const newState = {
        ...userDetails,
        portfolio: {
          ...userDetails.portfolio,
          theme: colorData,
        },
      };
      setUser(newState);
      // @ts-ignore
      const response = await updateUser(newState, props.token);

      console.log(response, 'form sent');
    } catch (error) {
      console.log(error, 'error in saving color theme to database');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles['color-theme-form']}>
      <Box
        sx={
          mediaQuery900
            ? muiStyles['colorSelection-900']
            : muiStyles['colorSelection']
        }
      >
        <ColorCardItem
          color={colorBackground}
          colorLabel="Background Color"
          colorName="backgroundColor"
          changeHandler={setColorBackground}
        ></ColorCardItem>
        <ColorCardItem
          color={colorPrimary}
          colorLabel="Primary Color"
          colorName="primaryColor"
          changeHandler={setColorPrimary}
        ></ColorCardItem>
        <ColorCardItem
          color={colorSecondary}
          colorLabel="Secondary Color"
          colorName="secondaryColor"
          changeHandler={setColorSecondary}
        ></ColorCardItem>
        <ColorCardItem
          color={colorTertiary}
          colorLabel="Tertiary Color"
          colorName="tertiaryColor"
          changeHandler={setColorTertiary}
        ></ColorCardItem>
        <ColorCardItem
          color={colorBackground2}
          colorLabel="Text Color"
          colorName="secondaryBackgroundColor"
          changeHandler={setColorBackground2}
        ></ColorCardItem>
      </Box>
      <Box
        sx={
          mediaQuery600
            ? muiStyles['buttonSelection-600']
            : mediaQuery900
            ? muiStyles['buttonSelection-900']
            : muiStyles['buttonSelection']
        }
      >
        <Box>
          <Button
            variant="outlined"
            startIcon={<GenerateIcon></GenerateIcon>}
            type="button"
            sx={
              mediaQuery600
                ? muiStyles['button-600']
                : mediaQuery900
                ? muiStyles['button-900']
                : muiStyles['button']
            }
            onClick={onGenerateHandler}
          >
            Generate
          </Button>
        </Box>
        <Box>
          <Button
            sx={
              mediaQuery600
                ? muiStyles['button-600']
                : mediaQuery900
                ? muiStyles['button-900']
                : muiStyles['button']
            }
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

export default FormColorTheme;
