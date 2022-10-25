import React from "react";

const Event = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default Event;

// React.ChangeEvent is only applicable to el;ement that can be changed
// React.DragEvent is only applicable to element that can be dragged. Similar different defs for different events
