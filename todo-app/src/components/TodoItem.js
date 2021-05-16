import React from 'react'
import '../index.css'

function TodoItem(props){
    const completeStyle = {
        textDecoration: "line-through"
    }
    const completeTodoItem = props.data.completed ? completeStyle: null;
    return (
        <div>
            <div className="todo-item">
                <input type='checkbox'  
                checked={props.data.completed}
                onChange={() => props.handleChange(props.data.id)}/>
                <span style={completeTodoItem} className="todo-item-text">{props.data.text}</span>
            </div>
            <hr className="line" />
        </div>
    )
}

export default TodoItem