import styles from './form-color-theme.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GenerateIcon from '@mui/icons-material/Cached';
import muiStyles from './styles-form-color-theme';
import { useState, useEffect } from 'react';
import { colorApi } from '../../utils/ApiService';
import { Colors } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface FormColorThemeProps {
  token: string;
}

export function FormColorTheme(props: FormColorThemeProps) {
  const [colorBackground, setColorBackground] = useState([]);
  const [colorPrimary, setColorPrimary] = useState([]);
  const [colorSecondary, setColorSecondary] = useState([]);
  const [colorTertiary, setColorTertiary] = useState([]);
  const [colorBackground2, setColorBackground2] = useState([]);
  useEffect(() => {
    changeColorSelection();
  }, []);

  const changeColorSelection = async function () {
    try {
      const colorResults: any = await colorApi();

      const formattedResults = {
        backgroundColor: colorResults.result[0],
        primaryColor: colorResults.result[1],
        secondaryColor: colorResults.result[2],
        tertiaryColor: colorResults.result[3],
        backgroundColor2: colorResults.result[4],
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

  return (
    <Box sx={muiStyles['colorThemeForm']}>
      <form className={styles['color-theme-form']}>
        <Box sx={muiStyles['colorSelection']}>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `rgb(${colorBackground[0]}, ${colorBackground[1]}, ${colorBackground[2]})`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Background Color"
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `rgb(${colorPrimary[0]},
                  ${colorPrimary[1]},
                  ${colorPrimary[2]})`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              label="Primary Color"
              sx={muiStyles['colorInput']}
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `rgb(${colorSecondary[0]}, ${colorSecondary[1]}, ${colorSecondary[2]})`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Secondary Color"
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `rgb(${colorTertiary[0]}, ${colorTertiary[1]}, ${colorTertiary[2]})`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Tertiary Color"
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box
              sx={{
                backgroundColor: `rgb(${colorBackground2[0]}, ${colorBackground2[1]}, ${colorBackground2[2]})`,
                height: '20rem',
                width: '100%',
              }}
            ></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Secondary Background Color"
              variant="standard"
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
