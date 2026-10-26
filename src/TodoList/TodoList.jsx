import { useState } from 'react'
import { TodoItem } from '../TodoItem/TodoItem.jsx'
import { TodoForm } from '../TodoForm/TodoForm.jsx'

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'לכתוב שיעורי בית', status: `not done` },
    { id: 2, title: 'לנקות את החדר', status: `done` },
    { id: 3, title: 'לקנות חלב', status: `almost done` }
  ])
const markAsDone = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, status: 'done' } : todo
    )
  )
}
  
const addTask = (title) => {
  if (title === '') return
  setTodos([...todos, { id: Date.now(), title, status: 'not done' }])
}
  return (
    <>
    <TodoForm addTask={addTask}></TodoForm>
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markAsDone={markAsDone} />
      ))}
    </ul>
    </>
  )
}
