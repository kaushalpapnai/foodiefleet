import React from "react"
import "../style/card.css"

const RestaurentCard = ({name,cuisine,rating,image})=>{
    // const  {name,cuisine,rating} = restaurant1.info;

    return(
        <>
         <div id="card-container">
            <img src={image.url} alt="images"></img>
            <h1>{name}</h1>
            <h2>{rating.rating_text}</h2>
            <h3>{cuisine[0].name}</h3>
         </div>
        </>
    )
}

export default RestaurentCard