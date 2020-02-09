import React from "react";

import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoListContextProvider from "./context/TodoListContext";

function App() {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoListContextProvider>
  );
}

export default App;
