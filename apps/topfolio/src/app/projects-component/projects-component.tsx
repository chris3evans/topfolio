import styles from './projects-component.module.css';
import { mockUserState } from '../mockUser';
import SingleProject from '../single-project/single-project';
import MovingTitleComponent from '../moving-title-component/moving-title-component';

/* eslint-disable-next-line */
export interface ProjectsComponentProps {}
const projects = [...mockUserState.portfolio.projects];
export function ProjectsComponent(props: ProjectsComponentProps) {
  return (
    <>
      <MovingTitleComponent text={'My Projects'} alignCenter={true} />
      <div className={styles['projects-cont']} id="projects-cont">
        {projects.map((project, index) => (
          <SingleProject project={project} key={`key${index}`} />
        ))}
      </div>
    </>
  );
}

export default ProjectsComponent;
