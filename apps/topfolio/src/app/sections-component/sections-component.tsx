import { User } from '@topfolio/api-interfaces';
import styles from './sections-component.module.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Section from '../section/section';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface SectionsComponentProps {
  user: User;
  viewMode: boolean;
}

export function SectionsComponent(props: SectionsComponentProps) {
  const [tempLayout, setLayout] = useState([...props.user.portfolio.layout]);
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === draggableId
    )
      return;
    const newLayout = [...tempLayout];
    newLayout.splice(source.index, 1);
    newLayout.splice(destination.index, 0, tempLayout[+draggableId]);
    setLayout([...newLayout]);

    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="uniqueId">
        {(provided, snapshot) => (
          <div
            className={
              snapshot.isDraggingOver ? styles['dragging'] : styles['container']
            }
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tempLayout.map((section, index) => (
              <Section
                sectionType={section}
                index={index}
                key={`key${index}`}
                viewMode={props.viewMode}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default SectionsComponent;
