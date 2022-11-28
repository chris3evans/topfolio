import { User } from '@topfolio/api-interfaces';
import styles from './sections-component.module.css';

/* eslint-disable-next-line */
export interface SectionsComponentProps {
  user: User;
}

export function SectionsComponent(props: SectionsComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SectionsComponent!</h1>
    </div>
  );
}

export default SectionsComponent;
