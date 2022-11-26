import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from './dash-board-navigation-list.module.css';

/* eslint-disable-next-line */
export interface DashBoardNavigationListProps {}

export function DashBoardNavigationList(props: DashBoardNavigationListProps) {
  return (
    <List>
      <ListItem className={styles['dashboardNavigation-item']}>
        <ListItemText
          className={styles['dashboardNavigation-item-text']}
          primary="Infos"
        ></ListItemText>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <ListItemText
          className={styles['dashboardNavigation-item-text']}
          primary="About Me"
        ></ListItemText>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <ListItemText
          className={styles['dashboardNavigation-item-text']}
          primary="Contact Me"
        ></ListItemText>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <ListItemText
          className={styles['dashboardNavigation-item-text']}
          primary="Work Experience"
        ></ListItemText>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <ListItemText
          className={styles['dashboardNavigation-item-text']}
          primary="My Projects"
        ></ListItemText>
      </ListItem>
      <ListItem className={styles['dashboardNavigation-item']}>
        <ListItemText
          className={styles['dashboardNavigation-item-text']}
          primary="Layout"
        ></ListItemText>
      </ListItem>
    </List>
  );
}

export default DashBoardNavigationList;
