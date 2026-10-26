import { useState } from 'react'
export const TodoForm =({addTask }) => {
    const [newTask, setNewTask] = useState('')

    return (
<form onSubmit={(event) => { event.preventDefault(); addTask(newTask .trim()), setNewTask('') }}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="הכנס משימה חדשה"
        />
        <button type="submit">אישור</button>
      </form>)
}
