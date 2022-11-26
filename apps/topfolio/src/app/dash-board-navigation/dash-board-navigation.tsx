import styles from './dash-board-navigation.module.css';

/* eslint-disable-next-line */
export interface DashBoardNavigationProps {}

export function DashBoardNavigation(props: DashBoardNavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashBoardNavigation!</h1>
    </div>
  );
}

export default DashBoardNavigation;
