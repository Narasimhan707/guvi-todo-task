import React, { useState } from "react";
import Todo from "./Todo";
import "./styles.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState({
    task: "",
    description: "",
    status: "not completed",
  });

  const addTodo = () => {
    if (newTodo.task !== "" || newTodo.description !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo({ task: "", description: "", status: "not completed" });
    } else {
      alert("fields should not be empty");
    }
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.status === "completed";
    } else if (filter === "not completed") {
      return todo.status === "not completed";
    }
    return true;
  });

  const handleStatusFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Task"
          value={newTodo.task}
          onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <div className="mb-3">
        <h1 className="mt-4 mb-4">Status Filter</h1>
        <select
          className="form-control"
          value={filter}
          onChange={handleStatusFilter}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <div>
        <h1 className="mt-4 mb-4">Task List</h1>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
