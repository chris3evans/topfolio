import styles from './form-projects.module.css';

/* eslint-disable-next-line */
export interface FormProjectsProps {}

export function FormProjects(props: FormProjectsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormProjects!</h1>
    </div>
  );
}

export default FormProjects;
