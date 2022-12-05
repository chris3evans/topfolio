import styles from './section.module.css';
import { Draggable } from 'react-beautiful-dnd';
import WorkHistoryComponent from '../work-history-component/work-history-component';
import ProjectsComponent from '../projects-component/projects-component';
import BioComponent from '../bio-component/bio-component';
import SkillsComponent from '../skills-component/skills-component';

/* eslint-disable-next-line */
export interface SectionProps {
  sectionType: string;
  index: number;
  viewMode: boolean;
}

export function Section(props: SectionProps) {
  const type = props.sectionType;
  const componentMapper = (type: string) => {
    switch (type) {
      case 'Work Experience':
        return <WorkHistoryComponent viewMode={props.viewMode} />;
      case 'Projects':
        return <ProjectsComponent />;
      case 'About me':
        return <BioComponent />;
      case 'Skills':
        return (
          <div>
            <SkillsComponent />
          </div>
        );
      default:
        return;
    }
  };

  return (
    <Draggable
      isDragDisabled={props.viewMode}
      draggableId={props.index + ''}
      index={props.index}
      key={`key${props.index}`}
    >
      {(provided, snapshot) => (
        <div
          className={snapshot.isDragging ? styles['container'] : styles['']}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {componentMapper(type)}
        </div>
      )}
    </Draggable>
  );
}

export default Section;
