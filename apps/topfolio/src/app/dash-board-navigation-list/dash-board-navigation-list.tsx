import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from './dash-board-navigation-list.module.css';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface DashBoardNavigationListProps { }

export function DashBoardNavigationList(props: DashBoardNavigationListProps) {
  return (
    <List>
      <ListItem className={styles['dashboardNavigation-item']}>
        <Link to="/dashboard/about-me">
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="About Me"
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <Link to="/dashboard/contact-me">
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Contact Me"
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <Link to="/dashboard/work-experience">
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Work Experience"
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <Link to="/dashboard/projects">
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="My Projects"
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <Link to="/dashboard/layout">
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Layout & Theme"
          ></ListItemText>
        </Link>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <Link to="/dashboard/color-theme">
          <ListItemText
            className={styles['dashboardNavigation-item-text']}
            primary="Color Theme"
          ></ListItemText>
        </Link>
      </ListItem>
    </List>
  );
}

export default DashBoardNavigationList;
