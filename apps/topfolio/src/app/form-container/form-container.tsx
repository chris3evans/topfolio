import styles from './form-container.module.css';

/* eslint-disable-next-line */
export interface FormContainerProps {}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['form-container']}>
      *THIS IS WHERE FORM WILL BE RENDERED*
    </div>
  );
}

export default FormContainer;
