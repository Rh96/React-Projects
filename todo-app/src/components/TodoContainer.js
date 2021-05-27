import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoContainer extends Component {
    constructor() {
        super();
        this.state = {
            url: 'http://localhost:5000',
            todos: [],
            title: ""
        }
        // Bind Methods
    }
    // Controlled Methods
    async componentDidMount(){
        try {
            const response =  await fetch(this.state.url + '/todos');
            const data = await response.json();
            this.setState({ todos : data });
            this.getTodos(20);
            } catch (error) {
                console.log(error);
            }
        }
    
    // Methods
    getTodoItems = (id) => {
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

    getTodos = (size) => {
        let newTodosArray = [];
        if(this.state.todos.length < size) {
            return
        }
        
        for (let i = 0; i < size; i++) {
            newTodosArray.push(this.state.todos[i]);
        }
        this.setState({ todos:newTodosArray });
    }

    // Event handlers
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    addTodoItem = (e) => {
        e.preventDefault();
        const optionsRequest = {
            method: 'POST',
            headers: { 'content-type':'application/json' },
            body: JSON.stringify({title: this.state.title, completed: false})
        };

        let rnd = Math.floor(Math.random() * 100000);

        this.state.todos.push({id: rnd, title: this.state.title, completed: false});
        this.forceUpdate();

        fetch(`${this.state.url}/todos`, optionsRequest)
            .then(res => res.json())
            .then(data => data);
    }

    deleteItem = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id)
        })

        fetch(`${this.state.url}/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type':'application/json'
            }
        });
    }

    render(){
        const todoItems = this.state.todos.map(todo => 
            <TodoItem 
                key={todo.id}
                data={todo}
                getTodoItems={this.getTodoItems}
                deleteItem={this.deleteItem}/>
            )

        return (
            <div>
                <TodoForm 
                    addTodoItem={this.addTodoItem}
                    handleChange={this.handleChange}
                    value={this.state.title}
                />
                <h1>TODOS:</h1>
                <div className='todo-item-box'>
                    {todoItems}
                </div>
            </div>
        )
    }
}

export default TodoContainer;