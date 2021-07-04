import { FaTimes } from 'react-icons/fa'

const TodoItem = ({ item, onDelete, onToggle }) => {
    return (
        <ul className={`todo-item ${item.completed ? 'todo-item-completed' : ''}`}>
            <li>
                <div onClick={() => onToggle(item.id)} style={{ cursor: 'pointer' }}>
                    {item.title}
                </div>
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(item.id)}
                />
            </li>
        </ul>
    )
}

export default TodoItem
