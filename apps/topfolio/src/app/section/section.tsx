import styles from './section.module.css';
import { Draggable } from 'react-beautiful-dnd';

/* eslint-disable-next-line */
export interface SectionProps {
  sectionType: string;
  index: number;
  editMode: boolean;
}

export function Section(props: SectionProps) {
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
          <h1>{props.sectionType}</h1>
        </div>
      )}
    </Draggable>
  );
}

export default Section;
