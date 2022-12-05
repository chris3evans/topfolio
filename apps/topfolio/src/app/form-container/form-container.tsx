import styles from './form-container.module.css';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import FormProjects from '../form-projects/form-projects';
import ColorThemeSection from '../color-theme-section/color-theme-section';
import InfoAboutMe from '../info-about-me/info-about-me';
import ContactMeForm from '../contact-me-form/contact-me-form';
import Layout from '../form-layout/form-layout';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import ListWorkExperience from '../list-work-experience/list-work-experience';
import ListProjects from '../list-projects/list-projects';
import FormColorTheme from '../form-color-theme/form-color-theme';
import Button from '@mui/material/Button';
import FontThemeSection from '../font-theme-section/font-theme-section';

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
        <Button
          sx={{ fontSize: '1.4rem' }}
          onClick={preview}
          variant="contained"
        >
          Go to your Portfolio Page
        </Button>
      </div>
      <div className={styles['forms']}>
        {props.sectionName == 'about-me' ? (
          <InfoAboutMe token={props.token}></InfoAboutMe>
        ) : (
          ''
        )}
        {props.sectionName == 'work-experience' ? (
          <ListWorkExperience token={props.token}></ListWorkExperience>
        ) : (
          ''
        )}
        {props.sectionName == 'contact-me' ? (
          <ContactMeForm token={props.token}></ContactMeForm>
        ) : (
          ''
        )}
        {props.sectionName == 'projects' ? (
          <ListProjects token={props.token}></ListProjects>
        ) : (
          ''
        )}
        {props.sectionName == 'layout' ? (
          <Layout token={props.token}></Layout>
        ) : (
          ''
        )}
        {props.sectionName == 'color-theme' ? (
          <ColorThemeSection token={props.token}></ColorThemeSection>
        ) : (
          ''
        )}
        {props.sectionName == 'font-theme' ? (
          <FontThemeSection token={props.token}></FontThemeSection>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default FormContainer;
