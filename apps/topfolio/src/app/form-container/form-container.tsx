import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import InfoAboutMe from '../info-about-me/info-about-me';
import ContactMeForm from '../contact-me-form/contact-me-form';

/* eslint-disable-next-line */
export interface FormContainerProps {
  token: string;
  sectionName: string;
}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['form-container']}>
      <InfoAboutMe></InfoAboutMe>
      {props.sectionName == 'work-experience' ? (
        <FormWorkExperience token={props.token}></FormWorkExperience>
      ) : (
        ''
      )}
      {props.sectionName == 'contact-me' ? <ContactMeForm></ContactMeForm> : ''}
    </div>
  );
}

export default FormContainer;
