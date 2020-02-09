import React, { createContext, useState, useEffect } from "react";

import uuid from "uuid";
export const TodoListContext = createContext();

const TodoListContextProvider = props => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // eslint-disable-next-line
  const [tasks, setTasks] = useState(initialTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [selectedTask, setSelectedTask] = useState(null);
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };
  const clearList = () => {
    setTasks([]);
    console.log(tasks);
  };
  const findTask = id => {
    const task = tasks.find(t => t.id == id);
    setSelectedTask(task);
  };
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id == id ? { title, id } : task));
    setTasks(newTasks);
    setSelectedTask(null);
  };
  return (
    <TodoListContext.Provider
      value={{
        tasks,
        addTask,
        clearList,
        removeTask,
        findTask,
        selectedTask,
        editTask
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
