// React and Bootstrap Libraries
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'

// Components
import Header from './components/Header'
import TodoContainer from './components/TodoContainer';
import Footer from './components/Footer'

function App() {
  const url = 'http://localhost:3000/todos';
  const [todos, setTodos] = useState([])
    useEffect(() => {
      const getTodos = async () => {
        const todosFromServer = await fetchTodos()
        setTodos(todosFromServer) 
      }

      getTodos()
    }, [])

  // Fetch Todos 
  const fetchTodos = async () => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  // Fetch Todo 
  const fetchTodo = async (id) => {
    const res = await fetch(`${url}/${id}`)
    const data = await res.json()

    return data
  }

  // Add Todo
  const todoAdd = async (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...todo }

    setTodos([...todos, newTodo])
    
    const res = await fetch(url, {
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(newTodo)
    })

    const data = await res.json()
    console.log(data)
  }
  
  // Delete Todo
  const deleteTodo = async (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))

    await fetch(`${url}/${id}`, 
    {
        method: 'DELETE'
    })
  }

  // Toggle Completed
  const toggleCompletedTodo = async (id) => {
    const todoToggle = await fetchTodo(id)
    const updTodo = {...todoToggle, isCompleted: !todoToggle.isCompleted}

    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updTodo)
    })

    const data = await res.json()

    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, isCompleted:
        data.isCompleted } : todo
      )
    )
  }

  return (
    <div className="container-fluid">
      <Header />
        <TodoContainer 
          todos={todos}
          onAdd={todoAdd}
          onToggle={toggleCompletedTodo}
          onDelete={deleteTodo}
        />
      <Footer />
    </div>
  );
}

export default App;
