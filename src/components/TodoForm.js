import React, { useContext, useState, useEffect } from "react";

import { TodoListContext } from "../context/TodoListContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTask, clearList, selectedTask, editTask } = useContext(
    TodoListContext
  );
  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedTask) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, selectedTask.id);
    }
  };
  const handleChange = e => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
    } else {
      setTitle("");
    }
  }, [selectedTask]);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          required
          className="task-input"
        />
        <div className="buttons">
          <button className="btn add-task-btn" type="submit">
            {!selectedTask ? "Ekle" : "Güncelle"}
          </button>
          <button className="btn clear-btn" onClick={clearList}>
            Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
