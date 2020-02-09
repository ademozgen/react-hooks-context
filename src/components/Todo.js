import React, { useContext } from "react";

import { TodoListContext } from "../context/TodoListContext";

const Todo = ({ task }) => {
  const { removeTask, findTask } = useContext(TodoListContext);
  console.log(task);
  return (
    <div>
      <li className="list-item">
        <span> {task.title} </span>
        <div>
          <button
            className="btn-delete task-btn"
            onClick={() => removeTask(task.id)}
          >
            <i className="fa fa-trash-alt"></i>
          </button>{" "}
          <button
            className="btn-edit task-btn"
            onClick={() => findTask(task.id)}
          >
            <i className="fa fa-pen"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
