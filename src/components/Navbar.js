import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../Utils/userContext"

const Navbar = ()=>{
  const {user} = useContext(UserContext)
    return(
        <>
         <div className="flex justify-between bg-orange-500 shadow-lg">
             <img className="h-20 p-2"  src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"  alt="image"></img>
             <ul className="flex py-6">
                <Link to="/">
                  <li className="px-2 text-white hover:text-gray-300 ">home</li>
                </Link>
                <Link to="/about">
                  <li className="px-2 text-white hover:text-gray-300 ">about</li>
                </Link>
                <Link to="/contact">
                  <li className="px-2 text-white hover:text-gray-300 ">contact</li>
                </Link>
                <Link to="/instamart">
                  <li className="px-3 text-white hover:text-gray-300 ">instamart</li>
                </Link>
                <li className="pr-2 text-white">login</li>
                <li className="pr-2 text-white">{user.name}</li>
             </ul>
         </div>
        </>
    )
}

export default Navbar