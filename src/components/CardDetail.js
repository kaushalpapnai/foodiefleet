import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // we can read the url with useParams hook
import Shimmer from "./Shimmer.js";
import useRestaurant from "../Utils/useRestaurant.js";



const CardDetail =()=>{

  const {id} = useParams()

  const restaurant = useRestaurant(id)


   const {city,cloudinaryImageId,cuisines,name,avgRating} = restaurant?.data?.cards[0]?.card?.card?.info || {}

    return (!restaurant)?<Shimmer/>:(
        <>
      <div className="flex justify-center items-center h-[85vh]">
        <div className="flex bg-gray-200 h-fit items-center rounded-lg">
          <img className="w-80 h-80 border rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="image"></img>
          <div className=" mx-8">
              <h1 className="py-2 bg-white w-52 text-center rounded-lg my-2">title:  {name}</h1>
              <h2 className="py-2 bg-white w-52 text-center rounded-lg my-2">city:  {city}</h2>
              <div className="py-2 bg-white w-52 text-center rounded-lg my-2 flex  justify-center">
                  <h1>menu:- </h1>
                  <ul>
                   {
                     cuisines?.map((obj,index)=>{
                       return (
                         <li key={index}>{obj} </li>
                       )
                     })
                   }
                  </ul>                
              </div>
              
            <h3 className="py-2 bg-white w-52 text-center rounded-lg my-2">starts: {avgRating}</h3>    
          </div>
        </div>
      </div>
        </>
    )
}

export default CardDetail