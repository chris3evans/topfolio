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
    <div style={{ marginTop: '2em' }}>
      <MovingTitleComponent
        text={'My Projects'}
        alignCenter={true}
        html={'h2'}
      />
      <div className={styles['projects-cont']} id="projects-cont">
        {projects.map((project, index) => (
          <SingleProject project={project} key={`key${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
