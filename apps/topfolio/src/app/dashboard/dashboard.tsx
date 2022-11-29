import styles from './dashboard.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../utils/ApiService";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { Link, useParams } from "react-router-dom";

export interface DashboardProps { }

export function Dashboard(props: DashboardProps) {

  const { userDetails, setUser } = useContext(UserContext);

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (user) registerUser();
  }, [user]);

  const registerUser = async () => {
    const accessToken = await getAccessTokenSilently();
    console.log("Token to use in protected API request", accessToken);
    const response = await postUser(
      {
        "slug_url": "my-portfolio-page",
        "name": "test name"
      },
      accessToken);
    console.log("API RESPONSE:", response);
    setUser(response);
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to Dashboard!</h1>
      {/* {JSON.stringify(user)} */}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Dashboard;
