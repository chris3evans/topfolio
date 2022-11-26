import styles from './dash-board-page.module.css';
import DashBoardNavigation from '../dash-board-navigation/dash-board-navigation';

/* eslint-disable-next-line */
export interface DashBoardPageProps {}

export function DashBoardPage(props: DashBoardPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashBoardPage!</h1>
      <DashBoardNavigation></DashBoardNavigation>
    </div>
  );
}

export default DashBoardPage;
