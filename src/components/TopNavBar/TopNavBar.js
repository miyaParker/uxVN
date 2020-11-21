import React,{useState} from 'react'
import './TopNavBar.css'
const TopNavBar = () => {
    const [active,setActive] =useState(3)
    const handleClick=(event)=>setActive(+event.target.id)
    return (
        <ul className="top-nav-ul">
            <li className={`top-nav-li ${ active===1 ? "top-nav-active":"inactive"}`} id="1" onClick={handleClick}>About</li>
            <li className={`top-nav-li ${ active===2 ? "top-nav-active":"inactive"}`}  id="2" onClick={handleClick}>Contact</li>
            <li className={`top-nav-li ${ active===3 ? "top-nav-active":"inactive"}`}  id="3" onClick={handleClick}>Tickets</li>
        </ul>
    )
}
export default TopNavBar