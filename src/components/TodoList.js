import React, { useContext } from "react";

import { TodoListContext } from "../context/TodoListContext";

import Todo from "./Todo";

const TodoList = () => {
  const { tasks } = useContext(TodoListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Todo task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TodoList;
