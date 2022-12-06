import styles from './dash-board-navigation.module.css';
import DashBoardNavigationList from '../dash-board-navigation-list/dash-board-navigation-list';

/* eslint-disable-next-line */
export interface DashBoardNavigationProps { }

export function DashBoardNavigation(props: DashBoardNavigationProps) {
  return (
    <div className={styles['dashboardNavigation']}>
      <div className={styles['dashboardNavigation-main']}>
        {/* <img className={styles['dashboardNavigation-logo']}>*TOPFOLIO LOGO*</img> */}
        <div className={styles['dashboardNavigation-heading']}><img className={styles['headerLogo']} src="https://i.ibb.co/N3J0xJG/Untitled-150-150-px.png"></img> Topfolio</div>
      </div>

      <DashBoardNavigationList></DashBoardNavigationList>
    </div>
  );
}

export default DashBoardNavigation;
