import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import InfoAboutMe from '../info-about-me/info-about-me';
/* eslint-disable-next-line */
export interface FormContainerProps {}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['form-container']}>
      <FormWorkExperience></FormWorkExperience>
      <InfoAboutMe></InfoAboutMe>
    </div>
  );
}

export default FormContainer;
