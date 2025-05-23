import './App.css'
import Entertodo from './components/Entertodo'
import NavBar from './components/NavBar'
import ShowTodo from './components/ShowTodo'
import { useState } from 'react'


function App() {
  const [showTodo,setShowTodo] = useState(false)
  const [todos,setTodos] = useState([])
  const [edit,setEdit] = useState(false)
  const [title,setTitle] = useState("")
  const [notes,setNotes] = useState("")
  const [priority,setPriority] = useState("")
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [editId,setEditId] = useState()
  
  function handleDisplayTodo(){
    setShowTodo(prev => !prev)
  }

  function handleDeleteTodo(e){
    const newRevised = todos.filter((todo)=>todo.id !== e.id)
    setTodos(newRevised)
  }

  function handleEditTodo(e){
    setEdit(true)
    console.log(e)
    setEditId(e.id)
    setTitle(e.title)
    setNotes(e.note)
    setPriority(e.priority)
    setStartDate(e.StartDate)
    setEndDate(e.EndDate)
    setShowTodo(prev => !prev)
  }
  return (
    <div className="main-container">
      <NavBar handleDisplayTodo={handleDisplayTodo}/>
      {showTodo?<ShowTodo todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} edit={edit}/>:<Entertodo todos={todos} setTodos={setTodos} title={title} notes={notes} priority={priority} startDate={startDate} endDate={endDate}setTitle={setTitle} setNotes={setNotes} setPriority={setPriority} setStartDate={setStartDate} setEndDate={setEndDate} edit={edit} setEdit={setEdit} showTodo={showTodo} setShowTodo={setShowTodo} editId={editId} setEditId={setEditId}/>}
    </div>
  )
}

export default App
