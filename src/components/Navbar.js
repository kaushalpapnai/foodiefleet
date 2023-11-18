import React from "react"
import "../style/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
         <div id="nav-container">
             <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"  alt="image"></img>
             <ul className="nav-list">
                <Link to="/">
                  <li>home</li>
                </Link>
                <Link to="/about">
                  <li>about</li>
                </Link>
                <Link to="/contact">
                  <li>contact</li>
                </Link>
                <li>login</li>
             </ul>
         </div>
        </>
    )
}

export default Navbar