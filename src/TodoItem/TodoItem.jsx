const colorByStatus = (status) => {
  if (status === 'done') return 'green'
  if (status === 'almost done') return 'orange'
  return 'red'
}
export const TodoItem = ({ todo }) => {
  return <li style={{ color: colotByStutus (todo.status) }}>{todo.title}</li>
}

