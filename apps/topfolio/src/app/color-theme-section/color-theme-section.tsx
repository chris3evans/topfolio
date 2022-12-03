import styles from './color-theme-section.module.css';
import FormColorTheme from '../form-color-theme/form-color-theme';
import CurrentColorTheme from '../current-color-theme/current-color-theme';
import muiStyles from './styles-color-theme-section';
import Box from '@mui/material/Box';
/* eslint-disable-next-line */
export interface ColorThemeSectionProps {
  token: string;
}

export function ColorThemeSection(props: ColorThemeSectionProps) {
  return (
    <Box sx={muiStyles['colorThemeSection']}>
      <CurrentColorTheme></CurrentColorTheme>
      <FormColorTheme token={props.token}></FormColorTheme>
    </Box>
  );
}

export default ColorThemeSection;
