import styles from './form-color-theme.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GenerateIcon from '@mui/icons-material/Cached';
import muiStyles from './styles-form-color-theme';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { colorApi } from '../../utils/ApiService';
import { updateUser } from '../../utils/ApiService';

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
      // @ts-ignore
      const response = await updateUser(userDetails, props.token);
      console.log(response, 'form sent');
    } catch (error) {
      console.log(error, 'error in saving color theme to database');
    }
  };

  return (
    <Box sx={muiStyles['colorThemeForm']}>
      <form onSubmit={onSubmitHandler} className={styles['color-theme-form']}>
        <Box sx={muiStyles['colorSelection']}>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `#${colorBackground}`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Background Color"
              variant="standard"
              type="color"
              name="backgroundColor"
              value={`#${colorBackground}`}
              onChange={(event: any) => {
                setColorBackground(event.target.value.replace('#', ''));
              }}
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `#${colorPrimary}`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              label="Primary Color"
              sx={muiStyles['colorInput']}
              variant="standard"
              type="color"
              name="primaryColor"
              value={`#${colorPrimary}`}
              onInputCapture={(event: any) => {
                setColorPrimary(event.target.value.replace('#', ''));
              }}
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `#${colorSecondary}`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Secondary Color"
              variant="standard"
              type="color"
              name="secondaryColor"
              value={`#${colorSecondary}`}
              onInputCapture={(event: any) => {
                setColorSecondary(event.target.value.replace('#', ''));
              }}
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `#${colorTertiary}`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Tertiary Color"
              variant="standard"
              type="color"
              name="tertiaryColor"
              value={`#${colorTertiary}`}
              onInputCapture={(event: any) => {
                setColorTertiary(event.target.value.replace('#', ''));
              }}
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `#${colorBackground2}`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Secondary Background Color"
              variant="standard"
              type="color"
              name="secondaryBackgroundColor"
              value={`#${colorBackground2}`}
              onInputCapture={(event: any) => {
                setColorBackground2(event.target.value.replace('#', ''));
              }}
            ></TextField>
          </Box>
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
