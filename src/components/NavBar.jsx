import '../styles/NavBar.css'


export default function NavBar(){
    const todayDate = new Date()
    const datePart = todayDate.getDate()
    const monthPart = todayDate.getDay()+1
    const yearPart = todayDate.getFullYear()
    const fullDate = datePart+":"+monthPart+":"+yearPart



    return(
        <div className="navbar-container">
                <button className="enter-button">Enter Todo</button>
                <button className="list-todos">List Todo</button>
                <button className="today-date">{fullDate}</button>
        </div>
    )


}