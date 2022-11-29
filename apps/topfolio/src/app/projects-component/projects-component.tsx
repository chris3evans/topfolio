import styles from './projects-component.module.css';
import { mockUserState } from '../mockUser';
import SingleProject from '../single-project/single-project';

/* eslint-disable-next-line */
export interface ProjectsComponentProps {}
const projects = [...mockUserState.portfolio.projects];
export function ProjectsComponent(props: ProjectsComponentProps) {
  return (
    <div className={styles['projects-cont']} id="projects-cont">
      {projects.map((project, index) => (
        <SingleProject project={project} key={`key${index}`} />
      ))}
    </div>
  );
}

export default ProjectsComponent;
