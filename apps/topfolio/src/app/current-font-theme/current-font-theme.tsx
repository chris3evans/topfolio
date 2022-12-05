import styles from './current-font-theme.module.css';

/* eslint-disable-next-line */
export interface CurrentFontThemeProps {}

export function CurrentFontTheme(props: CurrentFontThemeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CurrentFontTheme!</h1>
    </div>
  );
}

export default CurrentFontTheme;
