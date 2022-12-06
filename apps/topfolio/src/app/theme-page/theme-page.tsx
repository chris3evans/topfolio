import styles from './theme-page.module.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ColorThemeSection from '../color-theme-section/color-theme-section';
import FontThemeSection from '../font-theme-section/font-theme-section';
import FormLayout2 from '../form-layout2/form-layout2';

export interface ThemeProps {
  token: string;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.9rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#1976d2',
  fontSize: '1.9rem',
  color: 'white',
  borderRadius: '10px',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Theme(props: ThemeProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion sx={{ backgroundColor: 'transparent', marginBottom: '15px' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          Drag & Drop each section to change the display order on your portfolio
        </AccordionSummary>
        <AccordionDetails>
          <FormLayout2 token={props.token}></FormLayout2>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: 'transparent', marginBottom: '15px' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          Customize theme Colors
        </AccordionSummary>
        <AccordionDetails>
          <ColorThemeSection token={props.token}></ColorThemeSection>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: 'transparent', marginBottom: '15px' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          Customize theme Font
        </AccordionSummary>
        <AccordionDetails>
          <FontThemeSection token={props.token}></FontThemeSection>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}