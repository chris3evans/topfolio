import styles from './bio-component.module.css';
import { mockUserState } from '../mockUser';
import Button from '@mui/material/Button';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import MovingParagraphComponent from '../moving-paragraph-component/moving-paragraph-component';

/* eslint-disable-next-line */
export interface BioComponentProps {}

export function BioComponent(props: BioComponentProps) {
  const title = mockUserState.name;
  const bio = mockUserState.portfolio.bio;

  return (
    <div className={styles['container']} id="bio-component">
      <div className={styles['text-cont']}>
        <MovingTitleComponent text={title} />
        <MovingParagraphComponent text={bio} />
      </div>
      <Button
        variant="contained"
        className="animated-button"
        sx={{ width: 200, height: 50 }}
      >
        Contact me
      </Button>
    </div>
  );
}

export default BioComponent;
