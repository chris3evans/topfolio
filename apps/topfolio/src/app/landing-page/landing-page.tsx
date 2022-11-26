import styles from './landing-page.module.css';

/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Create a professional Portfolio</h1>
      <h3>Easy to create unique portfolios , free and simple</h3>
    </div>
  );
}

export default LandingPage;
