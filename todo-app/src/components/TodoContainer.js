import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const TodoContainer = ({ todoItems, onAdd ,onDelete, onToggle }) => {
    return (
        <div className='todo-container'>
            <div>
                {todoItems.map((item) => (
                    <TodoItem 
                        key={item.id} 
                        item={item}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
                <TodoForm onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default TodoContainer
