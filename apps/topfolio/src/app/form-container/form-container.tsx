import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import ContactMeForm from '../contact-me-form/contact-me-form';

/* eslint-disable-next-line */
export interface FormContainerProps {}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['form-container']}>
      {/* <FormWorkExperience></FormWorkExperience> */}
      <ContactMeForm></ContactMeForm>
    </div>
  );
}

export default FormContainer;
