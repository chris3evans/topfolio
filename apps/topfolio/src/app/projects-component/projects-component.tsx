import styles from './projects-component.module.css';
import { mockUserState } from '../mockUser';
import SingleProject from '../single-project/single-project';

/* eslint-disable-next-line */
export interface ProjectsComponentProps {}
const projects = [...mockUserState.portfolio.projects];
export function ProjectsComponent(props: ProjectsComponentProps) {
  return (
    <div className={styles['container']}>
      <h3>Projects</h3>
      <div className={styles['project-cont']}>
        {projects.map((project, index) => (
          <SingleProject project={project} key={`key${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
