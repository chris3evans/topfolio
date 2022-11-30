import { MyProjects, User } from '@topfolio/api-interfaces';
import styles from './single-project.module.css';

/* eslint-disable-next-line */
export interface SingleProjectProps {
  project: MyProjects;
}

export function SingleProject(props: SingleProjectProps) {
  return (
    <div className={styles['projects-cont']} id="project-div">
      <div className={styles['laptop-bg']}>
        <div
          className={styles['laptop-content-bg']}
          style={{ backgroundImage: `url(${props.project.images[0]})` }}
        ></div>
        <img src="../../assets/laptop.png" alt="laptopFrame" />

        <div className={styles['infos']}>
          <p>{props.project.name}</p>
          <p>{props.project.description}</p>
          <a href={props.project.github_url}>Github</a>
          <a href={props.project.app_url}>App</a>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
