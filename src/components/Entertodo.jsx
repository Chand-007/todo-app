import '../styles/Entertodo.css'
import { useState } from 'react'
var id = 0
export default function Entertodo({setTodos,todos,title,setTitle,notes,setNotes,priority,setPriority,startDate,setStartDate,endDate,setEndDate,edit,setEdit,editId,setEditId,setShowTodo}){

    

    function changeTitle(e){
        setTitle(e.target.value)
    }

    function changeNotes(e){
        setNotes(e.target.value)
    }

    function topPriority(e){
        setPriority("Top")
    }

    function mediumPriority(e){
        setPriority("Medium")
    }

    function lowPriority(e){
        setPriority("Low")
    }

    function changeStartDate(e){
        setStartDate(e.target.value)
    }

    function changeEndDate(e){
        setEndDate(e.target.value)
    }

    function handleClick(){
        if(!edit){
            console.log(title,notes,priority,startDate,endDate)
            const toBesaved = {id:++id,title:title,note:notes,priority:priority,StartDate:startDate,EndDate:endDate}
            setTodos((prev)=>[...prev,toBesaved])
            setEndDate("")
            setNotes("")
            setPriority("")
            setStartDate("")
            setTitle("")
            return
        }
        else{
            setTodos(todos.filter(todo=>todo.id !== editId))
            const editedToBeSaved = {id:editId,title:title,note:notes,priority:priority,StartDate:startDate,EndDate:endDate}
            setTodos((prev)=>[...prev,editedToBeSaved])
            setEndDate("")
            setNotes("")
            setPriority("")
            setStartDate("")
            setTitle("")
            setShowTodo(prev => !prev)
            return
        }
    }

    function handleCheckbox(e){
        
    }

    return(
        <div className='enter-todo'>
            <h1>{edit?"Edit":"Enter"} Todo</h1>
            <div className="label-form">
                <div className='labels-container'>
                    <label>
                        <p>Enter title of todo</p>
                    </label>
                    <label>
                        <p>Enter notes of todo</p>
                    </label>
                    <label>
                        <p>Click on task priority</p>
                    </label>
                    <label>
                        <p>Click on task start date</p>
                    </label>
                    <label>
                        <p>Click on task end date</p>
                    </label>
                </div>
                <div className='inputs-container'>
                    <input type='text' value={title} onChange={changeTitle}/>
                    <input type='text' value={notes} onChange={changeNotes}/>
                    <div className='task-priority' onClick={handleCheckbox}>
                    <label>
                        Top
                        <input type="checkbox" className="top-priority" value={priority} onChange={topPriority}/>
                    </label>
                    
                    <label>
                        Medium
                        <input type="checkbox" className="medium-priority" value={priority} onChange={mediumPriority}/>
                    </label>

                    <label>
                        Low
                        <input type="checkbox" className="low-priority" value={priority} onChange={lowPriority}/>
                    </label>
                    </div>
                    <input type="date"value={startDate} onChange={changeStartDate}/>
                    <input type="date" value={endDate} onChange={changeEndDate}/>
                </div>
                  </div> 
                  <button onClick={handleClick}>Add Todo</button>     
            </div>
    )
}