import { useState } from "react";

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
                                    
  const handleCancel = () => {
    setNewText(todo.text);     // reset input
    setIsEditing(false);       // exit edit mode
  };

  const handleSave = () => {
    if (!newText.trim()) return;

    editTodo(todo.id, newText);
    setIsEditing(false);       // exit edit mode
  };

  return (
    <li style={{ marginBottom: "8px" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
