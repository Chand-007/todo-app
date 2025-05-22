import './App.css'
import Entertodo from './components/Entertodo'
import NavBar from './components/NavBar'
import ShowTodo from './components/ShowTodo'
import { useState } from 'react'


function App() {
  const [showTodo,setShowTodo] = useState(false)
  function handleDisplayTodo(){console.log(showTodo)
    setShowTodo(prev => !prev)
  }

  return (
    <div className="main-container">
      <NavBar handleDisplayTodo={handleDisplayTodo}/>
      {showTodo?<ShowTodo/>:<Entertodo/>}
    </div>
  )
}

export default App
