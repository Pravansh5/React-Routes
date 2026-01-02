import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleTodo = () => {
    if (!title.trim()) {
      setError("Please enter a todo title");
      return;
    }

    addTodo({
      id: crypto.randomUUID(),
      text: title,
    });

    setTitle("");
    setError("");
  };

  return (
    <>
      <h3>Add Todo</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleTodo}>Add Todo</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default TodoInput;
