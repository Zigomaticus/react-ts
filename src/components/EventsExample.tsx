import React, { FC, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setisDrag] = useState<boolean>(false);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(value);
  }

  function dragHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log("DRAG");
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setisDrag(false);
    console.log("DROP");
  }

  function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setisDrag(false);
  }

  function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setisDrag(true);
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Press</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: "200px", height: "200px", background: "orange" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "blue" : "orange",
          marginTop: "15px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
