import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./Profile"

class About extends React.Component{
 
   constructor(props){
       super(props)
       console.log("parent - constructor")
   }
    
     componentDidMount(){
          console.log("parent - componentDIdMount")
     }
    
   render(){
      console.log("parent render")
      return(
         <>
            <h1>This is about section!!!</h1>
             {/* <Outlet/> */}
             <Profile name={"First child"}/>
             {/* <Profile name={"second child"}/> */}

         </>
      )
   }
}

export default About