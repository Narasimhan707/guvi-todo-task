import React, { useState } from "react";
import "./styles.css";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (task !== "" || description !== "") {
      const updatedTodo = {
        ...todo,
        task,
        description,
        status,
      };
      updateTodo(updatedTodo);
      setIsEditing(false);
    } else {
      alert("fields should not be empty");
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              className="form-control mb-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
            <button className="btn btn-primary mr-2" onClick={handleUpdate}>
              Update
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{task}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Status: {status}</p>
            <button className="btn btn-primary mr-2" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
