import styles from './dash-board-page.module.css';

/* eslint-disable-next-line */
export interface DashBoardPageProps {}

export function DashBoardPage(props: DashBoardPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashBoardPage!</h1>
    </div>
  );
}

export default DashBoardPage;
