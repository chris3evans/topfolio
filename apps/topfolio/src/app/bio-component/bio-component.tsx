import styles from './bio-component.module.css';
import { mockUserState } from '../mockUser';

/* eslint-disable-next-line */
export interface BioComponentProps {}

export function BioComponent(props: BioComponentProps) {
  return (
    <div className={styles['container']}>
      <h4>{`Hi, I'm ${mockUserState.name}`}</h4>
      <p>{mockUserState.portfolio.description}</p>
    </div>
  );
}

export default BioComponent;
