import styles from './form-container.module.css';

/* eslint-disable-next-line */
export interface FormContainerProps {}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormContainer!</h1>
    </div>
  );
}

export default FormContainer;
