import '../styles/NavBar.css'


export default function NavBar({handleDisplayTodo}){
    const todayDate = new Date()
    const datePart = todayDate.getDate()
    const monthPart = todayDate.getDay()+1
    const yearPart = todayDate.getFullYear()
    const fullDate = datePart+":"+monthPart+":"+yearPart



    return(
        <div className="navbar-container">
                <button className="enter-button" onClick={handleDisplayTodo}>Enter Todo</button>
                <button className="list-todos" onClick={handleDisplayTodo}>List Todo</button>
                <button className="today-date">{fullDate}</button>
                <div className="calender-container">
                    <input  type='date'/>
                    <p>see calender here</p>
                </div>
        </div>
    )


}