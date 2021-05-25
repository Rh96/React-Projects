import React from 'react';

function TodoForm(props) {
    return (
    <div>
        <form onSubmit={(e) => props.addTodoItem(e)}>
            <label />
                Title:
                <input 
                type="text" 
                name="title"
                value={props.title}
                onChange={(e) => props.handleChange(e)}
                />
            <button>Add</button>
        </form>
    </div>
    );
}

export default TodoForm;