
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useContext, useEffect, useState } from 'react';
import { updateUser } from '../../utils/ApiService';
import { UserContext } from '../../utils/UserContext';
import DraggableSection from './draggable-section';
import FormColorTheme from "../form-color-theme/form-color-theme";
import styles from './form-layout2.module.css';


/* eslint-disable-next-line */
export interface FormLayout2Props {
  token: string;
}

export function FormLayout2(props: FormLayout2Props) {

  const [state, setState] = useState({ items: [{ id: '1', content: 'Work Experience' }, { id: '2', content: 'Projects' }, { id: '3', content: 'About me' }, { id: '4', content: 'Skills' }] });

  const { userDetails, setUser } = useContext(UserContext);

  const saveLayout = async () => {
    if (userDetails) {
      const response = await updateUser(userDetails, props.token);
      //@ts-ignore
      console.log('UPDATING LAYOUT:', response.data && response.data.portfolio ? response.data.portfolio.layout : '');
    }
  };

  // a little function to help us with reordering the result
  const reorder = (list: [{ id: string, content: string }], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 10;

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: '0',
    margin: `0 0 ${grid}px 0`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // change background colour if dragging
    background: isDragging ? "none" : "none",

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const getListStyle = (isDraggingOver: any) => ({
    /* background: isDraggingOver ? "lightblue" : "lightgrey", */
    padding: '0',
    width: '100%',
    fontSize: '20px',
    color: 'black',
    borderRadius: '20px'
  });

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      //@ts-ignore
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({
      items
    });

  }

  useEffect(() => {
    const format = userDetails.portfolio.layout.map((section, index) => ({ id: '' + index + 1, content: section }))
    console.log("----->", format);
    const initial = { items: format }
    //@ts-ignore
    setState(initial);
  }, [userDetails]);

  useEffect(() => {

    const newLayout = state.items.map(i => i.content);
    if (userDetails.portfolio.layout !== newLayout) {
      setUser(user => {
        user.portfolio.layout = newLayout;
        return user;
      });

      saveLayout();
    }
  }, [state]);

  console.log("items", state.items.map(i => i.content))
  console.log("state", state)
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {/* item.content */}
                        <DraggableSection title={item.content} descr={'description of the section goes here...'} />
                      </div>
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default FormLayout2;
