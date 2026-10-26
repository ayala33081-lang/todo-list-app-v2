const colorByStatus = (status) => {
  if (status === 'done') return 'green'
  if (status === 'almost done') return 'orange'
  return 'red'
}
export const TodoItem = ({ todo , markAsDone }) => {
  return <li className="todo-item" style={{ color: colorByStatus (todo.status) }}>{todo.title}
  {todo.status !== 'done' && (
  <button className="todo-button" onClick={() => markAsDone(todo.id)}>המשימה בוצעה</button>
)}
  </li>
}

