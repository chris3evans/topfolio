import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import FormProjects from '../form-projects/form-projects';
import InfoAboutMe from '../info-about-me/info-about-me';
import ContactMeForm from '../contact-me-form/contact-me-form';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import ListWorkExperience from '../list-work-experience/list-work-experience';

/* eslint-disable-next-line */
export interface FormContainerProps {
  token: string;
  sectionName: string;
}

export function FormContainer(props: FormContainerProps) {
  const userContext = useContext(UserContext);

  return (
    <div className={styles['form-container']}>
      {props.sectionName == 'about-me' ? <InfoAboutMe></InfoAboutMe> : ''}
      {props.sectionName == 'work-experience' ? (
        /* @ts-ignore */
        userContext.userDetails.portfolio.work_history ? (
          <ListWorkExperience></ListWorkExperience>
        ) : (
          <FormWorkExperience token={props.token}></FormWorkExperience>
        )
      ) : (
        ''
      )}
      {props.sectionName == 'contact-me' ? <ContactMeForm></ContactMeForm> : ''}
      {props.sectionName == 'projects' ? <FormProjects></FormProjects> : ''}
    </div>
  );
}

export default FormContainer;
