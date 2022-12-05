import styles from './skills-slider.module.css';
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

/* eslint-disable-next-line */
export interface SkillsSLiderProps {
  skill: { skill: string; level: number };
}

const PrettoSlider = styled(Slider)({
  color: 'var(--primary)',
  height: 8,
  '& .MuiSlider-track': {
    backgroundColor: 'var(--primary)',
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    position: 'relative',
    height: '2.2em',
    width: '2.2em',
    backgroundColor: 'white',
    border: '2px solid var(--primary)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    position: 'absolute',
    top: '1.6em',
    lineHeight: 1.2,
    fontSize: 20,
    padding: 0,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'transparent',
    color: 'var(--primary-text)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
export function SkillsSLider(props: SkillsSLiderProps) {
  return (
    <div className={styles['container']}>
      <Typography gutterBottom>{props.skill.skill}</Typography>
      <PrettoSlider
        valueLabelDisplay="on"
        aria-label={props.skill.skill + 'slider'}
        defaultValue={props.skill.level}
        disabled
      />
    </div>
  );
}

export default SkillsSLider;
