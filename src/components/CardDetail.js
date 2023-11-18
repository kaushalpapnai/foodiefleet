import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // we can read the url with useParams hook
import Shimmer from "./Shimmer.js";



const CardDetail =()=>{

  const {id} = useParams()

  const [restaurant,setRestaurant] = useState({})
  
  useEffect(()=>{
   fetchData(id);
  },[]) ;
  
  const fetchData = async(id)=>{
     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
     const jsonData = await data.json();
     setRestaurant(jsonData)
  }


   const {city,cloudinaryImageId,cuisines,name,avgRating} = restaurant?.data?.cards[0]?.card?.card?.info || {}

    return (!restaurant)?<Shimmer/>:(
        <>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="image"></img>
          <h1>{name}</h1>
          <h2>{city}</h2>
          <ul>
            {
              cuisines?.map((obj,index)=>{
                return (
                  <li key={index}>{obj}</li>
                )
              })
            }
          </ul>
          <h3>{avgRating} stars</h3>
        </>
    )
}

export default CardDetail