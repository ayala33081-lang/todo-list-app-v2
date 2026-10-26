import { useState } from 'react'
import { TodoItem } from '../TodoItem/TodoItem.jsx'

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'לכתוב שיעורי בית', completed: false },
    { id: 2, title: 'לנקות את החדר', completed: true },
    { id: 3, title: 'לקנות חלב', completed: false }
  ])
  

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
