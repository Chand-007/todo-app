import '../styles/ShowTodo.css'

export default function ShowTodo({todos,handleDeleteTodo,handleEditTodo}){
    return(

        <div className="show-todo-container">
            <h1>Entered Todos Are:</h1>
            <div className="todos-list">
                {todos.map((todo)=>{
                    return(
                        <div className="todo-element-container">
                            <h3>{todo.title}</h3>
                            <h4>{todo.note}</h4>
                            <h5>Priority: {todo.priority}</h5>
                            <div className="todo-element-start-date">Start Date: {todo.StartDate}</div>
                            <div className="todo-element-end-date">End Date: {todo.EndDate}</div>
                            <div className="edit-delete-container">
                                <button className="edit-todo-button"onClick={()=>handleEditTodo(todo)}>Edit</button>
                                <button className="delete-todo-button" onClick={()=>handleDeleteTodo(todo)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
       

       
    )
}