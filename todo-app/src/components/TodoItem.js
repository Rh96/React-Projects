import React from 'react';
import '../index.css';

function TodoItem(props){
    const completeStyle = {
        textDecoration: "line-through"
    }

    const buttonStyle = {
        position: "absolute",
        right: "36%"
    }

    const completeTodoItem = props.data.completed ? completeStyle: null;
    return (
        <div>
            <div className="todo-item">
                <input type='checkbox'  
                checked={props.data.completed}
                onChange={() => props.getTodoItems(props.data.id)}/>
                
                <div className="todo-item-text">
                    <span style={completeTodoItem}>{props.data.title}</span>
                </div>

                <div style={buttonStyle}>
                    <button  onClick={() => props.deleteItem(props.data.id)}>Delete</button>
                </div>
            </div>
            <hr className="line" />
        </div>
    )
}

export default TodoItem;