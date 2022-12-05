import muiStyles from './styles-font-theme-section';
import FormFontTheme from '../form-font-theme/form-font-theme';
import CurrentFontTheme from '../current-font-theme/current-font-theme';
import Box from '@mui/material/Box';

/* eslint-disable-next-line */
export interface FontThemeSectionProps {
  token: string;
}

export function FontThemeSection(props: FontThemeSectionProps) {
  return (
    <Box sx={muiStyles['fontThemeSection']}>
      <CurrentFontTheme></CurrentFontTheme>
      <FormFontTheme token={props.token}></FormFontTheme>
    </Box>
  );
}

export default FontThemeSection;
