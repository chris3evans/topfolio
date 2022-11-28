import styles from './dash-board-page.module.css';
import DashBoardNavigation from '../dash-board-navigation/dash-board-navigation';
import FormContainer from '../form-container/form-container';

/* eslint-disable-next-line */
export interface DashBoardPageProps {}

export function DashBoardPage(props: DashBoardPageProps) {
  return (
    <div className={styles['dashboardPage']}>
      <DashBoardNavigation></DashBoardNavigation>
      <FormContainer></FormContainer>
    </div>
  );
}

export default DashBoardPage;
