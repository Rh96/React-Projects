import React from 'react';

// Components
import TodoItem from './TodoItem'

function App(){
    return (
        <div className='todo-item-box'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App