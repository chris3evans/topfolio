import styles from './form-color-theme.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GenerateIcon from '@mui/icons-material/Cached';
import muiStyles from './styles-form-color-theme';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { colorApi } from '../../utils/ApiService';
import { updateUser } from '../../utils/ApiService';
import ColorCardItem from '../color-card-item/color-card-item';

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
      };

      setUser((current) => {
        // @ts-ignore
        current.portfolio.theme = colorData;
        return current;
      });
    } catch (error) {
      console.log(error, 'error in saving color theme to database');
    }
  };

  // const MemoBackgroundColor = React.memo(ColorCardItem);

  return (
    <Box sx={muiStyles['colorThemeForm']}>
      <form onSubmit={onSubmitHandler} className={styles['color-theme-form']}>
        <Box sx={muiStyles['colorSelection']}>
          {/* <MemoBackgroundColor
            color={colorBackground}
            colorLabel="Background Color"
            colorName="backgroundColor"
            changeHandler={setColorBackground}
          ></MemoBackgroundColor> */}
          <ColorCardItem
            color={colorBackground}
            colorLabel="Background Color"
            colorName="backgroundColor"
            changeHandler={(event: any) => {
              setColorBackground(event.target.value.replace('#', ''));
            }}
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
            colorLabel="Secondary Background Color"
            colorName="secondaryBackgroundColor"
            changeHandler={setColorBackground2}
          ></ColorCardItem>
        </Box>
        <Box sx={muiStyles['buttonSelection']}>
          <Box>
            <Button
              variant="outlined"
              startIcon={<GenerateIcon></GenerateIcon>}
              type="button"
              sx={muiStyles['button']}
              onClick={onGenerateHandler}
            >
              Generate
            </Button>
          </Box>
          <Box>
            <Button sx={muiStyles['button']} variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default FormColorTheme;
