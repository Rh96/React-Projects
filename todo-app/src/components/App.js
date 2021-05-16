import React, { Component } from 'react';

// Components
import TodoItem from './TodoItem';

// Data
//import data from './TodoItemsData';
// https://raw.githubusercontent.com/Rh96/React-Projects/main/Jsons/todoList.json

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos : []
        }
    this.handleChange = this.handleChange.bind(this);
    }

  async componentDidMount(){
      try{
        const response =  await fetch('https://raw.githubusercontent.com/Rh96/React-Projects/main/Jsons/todoList.json');
        const data = await response.json();
        this.setState({ todos : data });
      } catch (error) {
          console.log(error);
      }
    }

    handleChange (id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => 
            <TodoItem 
                key={item.id} 
                data={item} 
                handleChange={this.handleChange}/>
            )
    return (
        <div className='todo-item-box'>
            {todoItems}
        </div>
    )
    }
}

export default App