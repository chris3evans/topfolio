import styles from './bio-component.module.css';
import { mockUserState } from '../mockUser';
import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface BioComponentProps {}

export function BioComponent(props: BioComponentProps) {
  return (
    <div className={styles['container']}>
      <h2>{`Hi, I'm ${mockUserState.name}`}</h2>
      <p>{mockUserState.portfolio.description}</p>
      <Button>Contact me</Button>
    </div>
  );
}

export default BioComponent;
