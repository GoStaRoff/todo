import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Just DO IT list</h1>
      <h2>
        {toDo} ещё сделать, {done} готово
      </h2>
    </div>
  );
};

export default AppHeader;
