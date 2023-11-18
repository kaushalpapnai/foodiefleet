import React from "react"
import { useRouteError } from "react-router-dom"      // this is a hoook this hook is smart enough to catch all the errors and give info about that.

const Error =()=>{
  const error = useRouteError();
    return (
      <>
        <h1>Oops!!</h1>
        <h2>something went wrong</h2>
        <h2>{error.status + ":" + error.statusText}</h2>
      </>
    )
}

export default Error