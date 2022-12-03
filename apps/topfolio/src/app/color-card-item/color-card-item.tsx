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
        // label="Background Color"
        label={props.colorLabel}
        variant="standard"
        type="color"
        // name="backgroundColor"
        name={props.colorName}
        value={`#${props.color}`}
        onChange={
          (event) => props.changeHandler(event)

          //   (event: any) => {
          //   setColorBackground(event.target.value.replace('#', ''));
          // }
        }
      ></TextField>
    </Box>
  );
}

export default ColorCardItem;
