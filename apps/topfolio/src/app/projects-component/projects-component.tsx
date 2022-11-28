import styles from './projects-component.module.css';
import { mockUserState } from '../mockUser';

/* eslint-disable-next-line */
export interface ProjectsComponentProps {}
const projects = [...mockUserState.portfolio.projects];
export function ProjectsComponent(props: ProjectsComponentProps) {
  return (
    <div className={styles['container']}>
      {projects.map((project) => (
        <div className={styles['project-container']}>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <img src={project.images[0]} alt={project.name} />
          <a href={project.github_url}>Github</a>
          <a href={project.app_url}>App</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectsComponent;
