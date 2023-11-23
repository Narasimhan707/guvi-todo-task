import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
