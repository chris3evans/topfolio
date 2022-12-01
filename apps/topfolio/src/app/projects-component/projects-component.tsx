import styles from './projects-component.module.css';
import SingleProject from '../single-project/single-project';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import { UserContext } from '../../utils/UserContext';
import { useContext } from 'react';

/* eslint-disable-next-line */
export interface ProjectsComponentProps {}
export function ProjectsComponent(props: ProjectsComponentProps) {
  const { userDetails } = useContext(UserContext);
  const projects = [...userDetails.portfolio.projects];

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
