import './App.css'
import Entertodo from './components/Entertodo'
import NavBar from './components/NavBar'
import ShowTodo from './components/ShowTodo'
import { useState } from 'react'


function App() {
  const [showTodo,setShowTodo] = useState(false)
  const [todos,setTodos] = useState([])
  console.log(todos)
  
  function handleDisplayTodo(){
    setShowTodo(prev => !prev)
  }

  function handleDeleteTodo(e){
    const newRevised = todos.filter((todo)=>todo.id !== e.id)
    setTodos(newRevised)
  }

  return (
    <div className="main-container">
      <NavBar handleDisplayTodo={handleDisplayTodo}/>
      {showTodo?<ShowTodo todos={todos} handleDeleteTodo={handleDeleteTodo}/>:<Entertodo setTodos={setTodos}/>}
    </div>
  )
}

export default App
