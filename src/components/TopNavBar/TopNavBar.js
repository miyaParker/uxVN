import React from 'react'
import './TopNavBar.css'
const TopNavBar = () => {
    return (
        <ul className="top-nav-ul">
            <li className="top-nav-li">About</li>
            <li className="top-nav-li">Contact</li>
            <li className="top-nav-li top-nav-active">Tickets</li>
        </ul>
    )
}
export default TopNavBar