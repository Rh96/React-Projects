// React and Bootstrap Libraries
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'

// Components
import Header from './components/Header'
import TodoContainer from './components/TodoContainer';
import Footer from './components/Footer'

// TODO: Call JSON Server and create fake db.json
// TODO: Use routers to show/hide multiple pages

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": true
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ])

  // Add Todo Item
  const todoItemAdd = (todoItem) => {
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTodoItem = { id, ...todoItem }
      setTodoItems([ ...todoItems, newTodoItem ])
  }
  
  // Delete Todo Item
  const deleteTodoItem = (id) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id))
  }

  // Toggle Completed
  const toggleCompletedTodoItem = (id) => {
      setTodoItems(todoItems.map((todoItem) => todoItem.id === id ? 
      { 
        id: todoItem.id, 
        title: todoItem.title, 
        completed: !todoItem.completed 
      } : todoItem))
  }

  return (
    <div className="container-fluid">
      <Header />
        <TodoContainer 
          todoItems={todoItems}
          onAdd={todoItemAdd}
          onToggle={toggleCompletedTodoItem}
          onDelete={deleteTodoItem}
        />
      <Footer />
    </div>
  );
}

export default App;
