import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

const App = () => {
  const { todos, addTodo, deleteTodo, editTodo } = useTodo();

  return (
    <div style={{padding:"20px"}}>
      <TodoInput addTodo={addTodo}/>

      <TodoList      
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
