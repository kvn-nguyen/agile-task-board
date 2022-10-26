import React, { createContext, useState } from "react";

export const BoardContext = createContext();

const BoardContextProvider = props => {
  const [tasks, setTasks] = useState([
    {
      title: "First Title",
      description: "First Description: Add more tasks!",
      id: 0,
      status: "backlog"
    }
  ]);
  const addTask = (title, description, id, status) => {
    setTasks([...tasks, { title, description, id, status }]);
  };
  const removeTask = id => {
    const newStatus = [...tasks];
    newStatus[id] = !newStatus[id];
    setTasks(newStatus);
  };
  const updateStatus = (e, id) => {
    const newStatus = [...tasks];
    newStatus[id].status = e.target.value;
    setTasks(newStatus);
  };

  return (
    <BoardContext.Provider value={{ tasks, addTask, removeTask, updateStatus }}>
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
