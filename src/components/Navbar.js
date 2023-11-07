import React from "react"
import "../style/Navbar.css"

const Navbar = ()=>{
    return(
        <>
         <div id="nav-container">
             <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"  alt="image"></img>
             <ul className="nav-list">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>login</li>
             </ul>
         </div>
        </>
    )
}

export default Navbar