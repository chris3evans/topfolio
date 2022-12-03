import styles from './color-card-item.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import muiStyles from './styles-color-card-item';

/* eslint-disable-next-line */
export interface ColorCardItemProps {
  color: string;
  colorLabel: string;
  colorName: string;
  changeHandler: Function;
}

export function ColorCardItem(props: ColorCardItemProps) {
  return (
    <Box sx={muiStyles['colorItem']}>
      <Box
        sx={{
          backgroundColor: `#${props.color}`,
          height: '20rem',
          width: '100%',
        }}
      ></Box>
      <TextField
        sx={muiStyles['colorInput']}
        label={props.colorLabel}
        variant="standard"
        type="color"
        name={props.colorName}
        value={`#${props.color}`}
        onInputCapture={(event: any) => {
          props.changeHandler(event.target.value.replace('#', ''));
          console.log('color change');
        }}
      ></TextField>
    </Box>
  );
}

export default ColorCardItem;
