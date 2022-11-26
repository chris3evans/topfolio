import styles from './dash-board-page.module.css';
import DashBoardNavigation from '../dash-board-navigation/dash-board-navigation';

/* eslint-disable-next-line */
export interface DashBoardPageProps {}

export function DashBoardPage(props: DashBoardPageProps) {
  return (
    <div className={styles['dashboardPage']}>
      <DashBoardNavigation></DashBoardNavigation>
      <div className={styles['form-container']}>*FORMS ARE RENDERED HERE*</div>
    </div>
  );
}

export default DashBoardPage;
