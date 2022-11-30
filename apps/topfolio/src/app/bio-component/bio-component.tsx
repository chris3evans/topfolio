import styles from './bio-component.module.css';
import { mockUserState } from '../mockUser';
import Button from '@mui/material/Button';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import MovingParagraphComponent from '../moving-paragraph-component/moving-paragraph-component';
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface BioComponentProps {}

export function BioComponent(props: BioComponentProps) {
  const title = mockUserState.name;
  const bio = mockUserState.portfolio.bio;

  return (
    <div className={styles['container']} id="bio-component">
      <div className={styles['text-cont']}>
        <MovingTitleComponent text={title} alignCenter={false} />
        <MovingParagraphComponent text={bio} />
      </div>
      <motion.div
        className={styles['button-box']}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.8 }}
      >
        <Button
          variant="contained"
          className="animated-button"
          sx={{ width: 200, height: 50 }}
        >
          Contact me
        </Button>{' '}
      </motion.div>
    </div>
  );
}

export default BioComponent;
