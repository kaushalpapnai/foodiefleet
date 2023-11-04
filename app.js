import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./Navbar"
import Body from "./Body"


const Demo = ()=>{
    return(
        <>
         <Navbar/>
         <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo/>)
