import React from 'react'
import './LeftNavBar.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import copyright from '../../assets/copyright.png'
import logo from '../../assets/logo.png'
const LeftNavBar = ({bgColor}) => {
    return (
        <div className="root" style={{backgroundColor:`${bgColor}`, transition: "backgroundColor 1s ease-in-out 2s"}}>
            <span><img src={logo} alt="" className="logo" /></span>
            <ul>
                <li className="icon"><img src={facebook} alt="" width={18} height={18} /></li>
                <li className="icon"><img src={instagram} alt="" width={18} height={18} /></li>
                <li className="icon"><img src={twitter} alt="" width={18} height={18} /></li>
            </ul>

            <span><img className="p2r" src={copyright} alt="" /></span>

        </div>
    )
}
export default LeftNavBar