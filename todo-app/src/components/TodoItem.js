import { FaTimes } from 'react-icons/fa'

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <ul className={`todo-item ${todo.isCompleted ? 'todo-item-completed' : ''}`}>
            <li>
                <div onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer' }}>
                    {todo.title}
                </div>
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(todo.id)}
                />
            </li>
        </ul>
    )
}

export default TodoItem
