import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteUser} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-container">
      <p className="para">{title}</p>
      <div>
        <button type="button" className="delete-button" onClick={onDelete}>
          delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
