import styles from './error-page.module.css';
import { useHistory } from 'react-router-dom';
/* eslint-disable-next-line */
export interface ErrorPageProps {}

export function ErrorPage(props: ErrorPageProps) {
  const history = useHistory()
  function handleClick() {
    history.push('/')
  }

  return (
    <div className={styles['container']}>
      <div className={styles['hero']}>
        <p>Error: Page not found</p>
        <button onClick={handleClick}>Return to Topfolio home</button>
      </div>
    </div>
  );
}

export default ErrorPage;
