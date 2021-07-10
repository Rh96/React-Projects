import { useState } from "react"

const TodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [showAddTodo, setShowAddTodo] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a todo!')
            return
        }

        onAdd({ title, isCompleted })

        setTitle('')
        setCompleted(false)
    }

    return (
        <div>
            {showAddTodo && <div className="row">
                <div className="col-3">
                    <label>Add Task</label>
                </div>
                <div className="col-6">
                    <input 
                        type="text"
                        value={title} 
                        placeholder="Add Task"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-3">
                    <button type='submit' onClick={(e) => { setShowAddTodo(!showAddTodo); onSubmit(e) }} className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>}
        <div className="row">
            <div className="col-12">
                <div className="click-here bg-primary" onClick={() => setShowAddTodo(!showAddTodo)}>
                    {showAddTodo ? 'Close' : 'Click Here to Add Todo'}
                </div>
            </div>
        </div>
        </div>
    )
}

export default TodoForm
