import '../styles/Entertodo.css'
import { useState } from 'react'
export default function Entertodo(){

    const [title,setTitle] = useState("")
    const [notes,setNotes] = useState("")
    const [priority,setPriority] = useState({top:false,medium:false,low:false})
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")

    function changeTitle(e){
        setTitle(e.target.value)
    }

    function changeNotes(e){
        setNotes(e.target.value)
    }

    function topPriority(e){
        console.log(e.target)
        const newTopPriority = {top:true,medium:false,low:false}
        setPriority(newTopPriority)
    }

    function mediumPriority(e){
        console.log(e.target)
        const newMediumPriority = {top:false,medium:true,low:false}
        setPriority(newMediumPriority)
    }

    function lowPriority(e){
        console.log(e.target)
        const newLowPriority = {top:false,medium:false,low:true}
        setPriority(newLowPriority)
    }

    function changeStartDate(e){
        setStartDate(e.target.value)
    }

    function changeEndDate(e){
        setEndDate(e.target.value)
    }

    function handleClick(){
        console.log(title,notes,priority,startDate,endDate)
    }

    return(
        <div className='enter-todo'>
            <h1>Enter Todo</h1>
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
                    <div className='task-priority'>
                    <label>
                        Top
                        <input type="checkbox" className="top-priority" value={priority.top} onChange={topPriority}/>
                    </label>
                    
                    <label>
                        Medium
                        <input type="checkbox" className="medium-priority" value={priority.medium} onChange={mediumPriority}/>
                    </label>

                    <label>
                        Low
                        <input type="checkbox" className="low-priority" value={priority.low} onChange={lowPriority}/>
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