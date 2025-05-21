import '../styles/Entertodo.css'

export default function Entertodo(){

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
                    <input type='text'/>
                    <input type='text'/>
                    <div className='task-priority'>
                    <label>
                        Top
                        <input type="checkbox" className="top-priority"/>
                    </label>
                    
                    <label>
                        Medium
                        <input type="checkbox" className="medium-priority"/>
                    </label>

                    <label>
                        Low
                        <input type="checkbox" className="low-priority"/>
                    </label>
                    </div>
                    <input type="date"/>
                    <input type="date"/>
                </div>
                  </div>      
            </div>
    )
}