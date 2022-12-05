import styles from './form-layout2.module.css';
import React, { useState, useRef } from 'react';

/* eslint-disable-next-line */
export interface FormLayout2Props {
  token: string;
}

export function FormLayout2(props: FormLayout2Props) {

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  }

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Somebody dropped an element with id: ${id}`);
  }

  return (
    <div>
      <div id="d1" draggable="true" onDragStart={handleDragStart}>Drag me</div>
      <div id="d2" draggable="true" onDragStart={handleDragStart}>Or me!</div>
      <div onDragOver={enableDropping} onDrop={handleDrop}>Drop Area</div>
    </div>
  );
}

export default FormLayout2;
