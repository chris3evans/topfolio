import { Project } from '@topfolio/api-interfaces';
import styles from './single-project.module.css';

/* eslint-disable-next-line */
export interface SingleProjectProps {
  project: Project;
}

export function SingleProject(props: SingleProjectProps) {
  return (
    <div className={styles['project-container']} id="project-div">
      <img src={props.project.images[0]} alt={props.project.name} />
      {/* <div className={styles['infos']}>
        <p>{props.project.name}</p>
        <p>{props.project.description}</p>
        <a href={props.project.github_url}>Github</a>
        <a href={props.project.app_url}>App</a>
      </div> */}
    </div>
  );
}

export default SingleProject;
