import styles from './dashboard.module.css';
import { useAuth0 } from "@auth0/auth0-react";

/* eslint-disable-next-line */
export interface DashboardProps { }

export function Dashboard(props: DashboardProps) {

  const { user, getAccessTokenSilently } = useAuth0();

  const getToken = async () => {
    const accessToken = await getAccessTokenSilently();
    console.log("Token to use in protected API request", accessToken);
  }
  getToken();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Dashboard!</h1>
      {JSON.stringify(user)}
    </div>
  );
}

export default Dashboard;
