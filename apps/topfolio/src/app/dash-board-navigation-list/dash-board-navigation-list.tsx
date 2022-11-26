import styles from './dash-board-navigation-list.module.css';

/* eslint-disable-next-line */
export interface DashBoardNavigationListProps {}

export function DashBoardNavigationList(props: DashBoardNavigationListProps) {
  return (
    <ul className="dashBoardNavigation-list">
      <li key={Math.random()} className="dashBoardNavigation-item">
        <p className="heading-6-text">Infos</p>
      </li>
      <li key={Math.random()} className="dashBoardNavigation-item">
        <p className="heading-6-text">About Me</p>
      </li>
      <li key={Math.random()} className="dashBoardNavigation-item">
        <p className="heading-6-text">Contact Me</p>
      </li>
      <li key={Math.random()} className="dashBoardNavigation-item">
        <p className="heading-6-text">Work Experience</p>
      </li>
      <li key={Math.random()} className="dashBoardNavigation-item">
        <p className="heading-6-text">My Projects</p>
      </li>
      <li key={Math.random()} className="dashBoardNavigation-item">
        <p className="heading-6-text">Layout</p>
      </li>
    </ul>
  );
}

export default DashBoardNavigationList;
