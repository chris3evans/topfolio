import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import FormProjects from '../form-projects/form-projects';
import InfoAboutMe from '../info-about-me/info-about-me';
import ContactMeForm from '../contact-me-form/contact-me-form';
import Layout from '../form-layout/form-layout';

/* eslint-disable-next-line */
export interface FormContainerProps {
  token: string;
  sectionName: string;
}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['form-container']}>
      {props.sectionName == 'about-me' ? <InfoAboutMe token={props.token}></InfoAboutMe> : ''}
      {props.sectionName == 'work-experience' ? (
        <FormWorkExperience token={props.token}></FormWorkExperience>
      ) : (
        ''
      )}
      {props.sectionName == 'contact-me' ? <ContactMeForm></ContactMeForm> : ''}
      {props.sectionName == 'projects' ? <FormProjects></FormProjects> : ''}
      {props.sectionName == 'layout' ? <Layout token={props.token}></Layout> : ''}
    </div>
  );
}

export default FormContainer;
