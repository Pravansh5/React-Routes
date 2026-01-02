import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,editTodo,deleteTodo}) => {
  return (
    
    <div>
    <h3>Todos</h3>
    {todos.length>0?todos.map((todo)=>(
        <TodoItem 
        key={todo.id}
        todo={todo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        />
    )):"No todos yet"}


    </div>
  )
}

export default TodoList