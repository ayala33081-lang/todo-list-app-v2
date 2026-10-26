const colotByStutus  = (completed) => {
  return completed ? 'green' : 'red'
}
export const TodoItem = ({ todo }) => {
  return <li style={{ color: colotByStutus (todo.completed) }}>{todo.title}</li>
}

