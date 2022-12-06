import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from './dash-board-navigation-list.module.css';
import { Link, useParams } from 'react-router-dom';
import muiStyles from './styles-dash-board-navigation-list';

/* eslint-disable-next-line */
export interface DashBoardNavigationListProps { }

export function DashBoardNavigationList(props: DashBoardNavigationListProps) {
  let { section } = useParams<{ section: string }>();
  return (
    <List className={styles['dashboardNavigation-list']}>
      <ListItem className={styles['dashboardNavigation-item'] + (section === 'about-me' ? ' ' + styles['current'] : '')}>
        <Link
          className={styles['dashboardNavigation-link']}
          to="/dashboard/about-me"
        >
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="About Me"
            sx={muiStyles['navigationItemLink']}
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item'] + (section === 'contact-me' ? ' ' + styles['current'] : '')}>
        <Link
          to="/dashboard/contact-me"
          className={styles['dashboardNavigation-link']}
        >
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Contact Me"
            sx={muiStyles['navigationItemLink']}
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item'] + (section === 'work-experience' ? ' ' + styles['current'] : '')}>
        <Link
          to="/dashboard/work-experience"
          className={styles['dashboardNavigation-link']}
        >
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Work Experience"
            sx={muiStyles['navigationItemLink']}
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item'] + (section === 'projects' ? ' ' + styles['current'] : '')}>
        <Link
          to="/dashboard/projects"
          className={styles['dashboardNavigation-link']}
        >
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="My Projects"
            sx={muiStyles['navigationItemLink']}
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item'] + (section === 'skills' ? ' ' + styles['current'] : '')}>
        <Link
          to="/dashboard/skills"
          className={styles['dashboardNavigation-link']}
        >
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Skills"
            sx={muiStyles['navigationItemLink']}
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item'] + (section === 'theme' ? ' ' + styles['current'] : '')}>
        <Link
          to="/dashboard/theme"
          className={styles['dashboardNavigation-link']}
        >
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Theme"
            sx={muiStyles['navigationItemLink']}
          ></ListItemText>
        </Link>
      </ListItem>
    </List>
  );
}

export default DashBoardNavigationList;
