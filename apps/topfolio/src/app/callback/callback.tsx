import styles from './callback.module.css';
import { useAuth0 } from "@auth0/auth0-react";

/* eslint-disable-next-line */
export interface CallbackProps { }

export function Callback(props: CallbackProps) {

  const { error } = useAuth0();

  return (
    <div className={styles['container']}>
      <h2>Logging in...</h2>
      {JSON.stringify(error)}
    </div>
  );
}

export default Callback;
