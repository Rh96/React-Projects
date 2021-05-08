import React from 'react'
import '../index.css'

function TodoItem(){

    return (
        <div className="todo-item">
            <input type='checkbox' />
            <span>Some text here</span>
        </div>
    )
}

export default TodoItem