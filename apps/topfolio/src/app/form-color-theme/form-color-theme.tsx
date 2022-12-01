import styles from './form-color-theme.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GenerateIcon from '@mui/icons-material/Cached';
import muiStyles from './styles-form-color-theme';

/* eslint-disable-next-line */
export interface FormColorThemeProps {
  token: string;
}

export function FormColorTheme(props: FormColorThemeProps) {
  return (
    <Box sx={muiStyles['colorThemeForm']}>
      <form className={styles['color-theme-form']}>
        <Box sx={muiStyles['colorSelection']}>
          <Box sx={muiStyles['colorItem']}>
            <Box sx={muiStyles['color']}></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Background Color"
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box sx={muiStyles['color']}></Box>
            <TextField
              label="Primary Color"
              sx={muiStyles['colorInput']}
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box sx={muiStyles['color']}></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Secondary Color"
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box sx={muiStyles['color']}></Box>
            <TextField
              sx={muiStyles['colorInput']}
              label="Tertiary Color"
              variant="standard"
            ></TextField>
          </Box>
          <Box sx={muiStyles['colorItem']}>
            <Box sx={muiStyles['color']}></Box>
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
