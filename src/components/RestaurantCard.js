import React from "react"
import "../style/card.css"

const RestaurentCard = ({name,cuisines,cloudinaryImageId,locality})=>{
    // const  {name,cuisine,rating} = restaurant1.info;

    return(
        <>
         <div id="card-container">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="images"></img>
            <h1>{name}</h1>
            <h2>{cuisines[0]}</h2>
            <h3>{locality}</h3>
         </div>
        </>
    )
}

export default RestaurentCard