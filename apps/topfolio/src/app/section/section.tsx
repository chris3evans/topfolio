import styles from './section.module.css';
import { Draggable } from 'react-beautiful-dnd';
import WorkHistoryComponent from '../work-history-component/work-history-component';
import ProjectsComponent from '../projects-component/projects-component';
import BioComponent from '../bio-component/bio-component';

/* eslint-disable-next-line */
export interface SectionProps {
  sectionType: string;
  index: number;
  editMode: boolean;
}

export function Section(props: SectionProps) {
  const type = props.sectionType;
  const componentMapper = (type: string) => {
    switch (type) {
      case 'WorkHistory':
        return <WorkHistoryComponent />;
      case 'Projects':
        return <ProjectsComponent />;
      case 'Bio':
        return <BioComponent />;
      default:
        return;
    }
  };

  return (
    <Draggable
      isDragDisabled={props.editMode}
      draggableId={props.index + ''}
      index={props.index}
      key={`key${props.index}`}
    >
      {(provided) => (
        <div
          className={styles['container']}
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
