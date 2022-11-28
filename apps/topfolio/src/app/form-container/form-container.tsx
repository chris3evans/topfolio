import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import FormProjects from '../form-projects/form-projects';

/* eslint-disable-next-line */
export interface FormContainerProps { }

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['form-container']}>
      <FormProjects></FormProjects>
      {/* <FormWorkExperience></FormWorkExperience> */}
    </div>
  );
}

export default FormContainer;
