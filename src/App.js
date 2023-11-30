import React, { Children } from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"
import CardDetail from "./components/CardDetail"
import Profile from "./components/Profile"


const App = ()=>{
    return(
        <>
         <Navbar/>
         <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<Error/>,

        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<CardDetail/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)
