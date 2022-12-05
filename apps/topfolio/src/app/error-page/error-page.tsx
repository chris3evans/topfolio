import styles from './error-page.module.css';

/* eslint-disable-next-line */
export interface ErrorPageProps {}

export function ErrorPage(props: ErrorPageProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['hero']}>
              <p>Error: Page not found</p>
      </div>
    </div>
  );
}

export default ErrorPage;
