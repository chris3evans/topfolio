import styles from './form-container.module.css';
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
import SkillForm from '../skill-form/skill-form';
/* eslint-disable-next-line */
export interface ErrorPageProps {}

export function ErrorPage(props: ErrorPageProps) {
  return (
    <div>
      <div>
              Error: Page not found
      </div>
    </div>
  );
}

export default ErrorPage;
