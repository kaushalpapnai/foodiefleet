import React, { Children } from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"
import CardDetail from "./components/CardDetail"


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
