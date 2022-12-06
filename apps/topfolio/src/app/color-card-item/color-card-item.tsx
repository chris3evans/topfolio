import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import muiStyles from './styles-color-card-item';
import { useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface ColorCardItemProps {
  color: string;
  colorLabel: string;
  colorName: string;
  changeHandler: Function;
}

export function ColorCardItem(props: ColorCardItemProps) {
  const mediaQuery900 = useMediaQuery('(max-width:900px)');

  return (
    <Box sx={muiStyles['colorItem']}>
      <Box
        sx={
          mediaQuery900
            ? {
                backgroundColor: `#${props.color}`,
                height: '7.5rem',
                width: '100%',
              }
            : {
                backgroundColor: `#${props.color}`,
                height: '20rem',
                width: '100%',
              }
        }
      ></Box>
      <TextField
        sx={
          mediaQuery900 ? muiStyles['colorInput-900'] : muiStyles['colorInput']
        }
        label={props.colorLabel}
        variant="standard"
        type="color"
        name={props.colorName}
        value={`#${props.color}`}
        onInputCapture={(event: any) => {
          props.changeHandler(event.target.value.replace('#', ''));
        }}
      ></TextField>
    </Box>
  );
}

export default ColorCardItem;
