import styles from './form-color-theme.module.css';

/* eslint-disable-next-line */
export interface FormColorThemeProps {}

export function FormColorTheme(props: FormColorThemeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormColorTheme!</h1>
    </div>
  );
}

export default FormColorTheme;
