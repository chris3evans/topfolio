import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import FormProjects from '../form-projects/form-projects';
import InfoAboutMe from '../info-about-me/info-about-me';
import ContactMeForm from '../contact-me-form/contact-me-form';
import Layout from '../form-layout/form-layout';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import ListWorkExperience from '../list-work-experience/list-work-experience';
import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface FormContainerProps {
  token: string;
  sectionName: string;
}

export function FormContainer(props: FormContainerProps) {
  const userContext = useContext(UserContext);
  console.log(userContext);

  const preview = () => {
    window.open(
      '/' + userContext.userDetails?.slug_url + '-portfolio',
      '_blank'
    );
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['preview']}>
        <Button onClick={preview} variant="contained">
          Go to your Portfolio Page
        </Button>
      </div>

      {props.sectionName == 'about-me' ? (
        <InfoAboutMe token={props.token}></InfoAboutMe>
      ) : (
        ''
      )}
      {props.sectionName == 'work-experience' ? (
        /* @ts-ignore */
        userContext.userDetails &&
        userContext.userDetails.portfolio.work_history.length ? (
          <ListWorkExperience token={props.token}></ListWorkExperience>
        ) : (
          <FormWorkExperience
            existingData={null}
            token={props.token}
            key={null}
            listener={null}
          ></FormWorkExperience>
        )
      ) : (
        ''
      )}
      {props.sectionName == 'contact-me' ? (
        <ContactMeForm token={props.token}></ContactMeForm>
      ) : (
        ''
      )}
      {props.sectionName == 'projects' ? <FormProjects></FormProjects> : ''}
      {props.sectionName == 'layout' ? (
        <Layout token={props.token}></Layout>
      ) : (
        ''
      )}
    </div>
  );
}

export default FormContainer;
