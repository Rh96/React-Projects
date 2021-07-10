import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const TodoContainer = ({ todos, onAdd ,onDelete, onToggle }) => {
    return (
        <div className='todo-container'>
            <div>
                {todos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
                {
                todos.length === 7 ? 
                    <div style={{display: 'none'}}>
                        <TodoForm onAdd={onAdd} />
                    </div> : 
                    <div> 
                        <TodoForm onAdd={onAdd} /> 
                    </div>
                }
            </div>
        </div>
    )
}

export default TodoContainer
