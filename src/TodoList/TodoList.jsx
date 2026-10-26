import { useState } from 'react'
import { TodoItem } from '../TodoItem/TodoItem.jsx'

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'לכתוב שיעורי בית', status: `not done` },
    { id: 2, title: 'לנקות את החדר', status: `done` },
    { id: 3, title: 'לקנות חלב', status: `almost done` }
  ])
  
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    const title = newTask.trim()
    if (title === '') return
    setTodos([...todos, { id: Date.now(), title, status: `not done` }])
    setNewTask('')
  }

  return (
    <>
    <form onSubmit={(event) => { event.preventDefault(); addTask() }}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="הכנס משימה חדשה"
        />
        <button type="submit">אישור</button>
      </form>

    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
    </>
  )
}
