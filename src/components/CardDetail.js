import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // we can read the url with useParams hook
import Shimmer from "./Shimmer.js";
import useRestaurant from "../Utils/useRestaurant.js";
import {addItem} from "../Utils/cartSlice.js"
import { useDispatch } from 'react-redux'



const CardDetail =()=>{

  const {id} = useParams()

  const dispatch = useDispatch();

  const handleAddItem=()=>{
    dispatch(addItem("grapes"));  // {payload:"grapes"}
  }

  const addFoodItem=(obj)=>{
     dispatch(addItem(obj))
  }

  const restaurant = useRestaurant(id)


   const {city,cloudinaryImageId,name,avgRating} = restaurant?.data?.cards[2]?.card?.card?.info || {}
   console.log(restaurant?.data?.cards[2]?.card?.card.info.id)
   
  //  {console.log(city)}

    return (!restaurant)?<Shimmer/>:(
        <>
      <div className="flex justify-center items-center h-[85vh]">
        <div className="flex bg-gray-200 h-fit items-center rounded-lg">
          <img className="w-80 h-80 border rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="image"></img>
          {/* {console.log(cloudinaryImageId)} */}
          <div className=" mx-8">
              <h1 className="py-2 bg-white w-52 text-center rounded-lg my-2">title:  {name}</h1>
              <h2 className="py-2 bg-white w-52 text-center rounded-lg my-2">city:  {city}</h2>
              <div className="py-2 bg-white w-52 text-center rounded-lg my-2 flex  justify-center">
                  <h1>menu:- </h1>
                  <ul>
                      {Object.values(restaurant?.data?.cards[2]?.card?.card || {}).map((obj, index) => {
                        if (obj && obj.id) { // Assuming the valid object has an ID
                          console.log("Current object:", obj); // Log the current object for debugging
                          return (
                            <li key={obj.id}> {/* Assuming obj has a unique id */}
                              {obj.name} -{" "}
                              <button 
                                className="bg-green-100 rounded-lg border-2 border-green-400 hover:bg-green-500 px-2" 
                                onClick={()                     => addFoodItem(obj)}
                              >
                                add
                              </button>
                            </li>
                          );
                        } else {
                          return null; // Skip rendering if it's not the expected object type
                        }
                      })}
                    </ul>             
              </div>
              
            <h3 className="py-2 bg-white w-52 text-center rounded-lg my-2">stars: {avgRating}</h3> 
            {/* <div>
              <button className="py-2 w-52 my-2 bg-green-100 rounded-lg border-2 border-green-400 hover:bg-green-500 " onClick={()=>handleAddItem()}>
                add to cart
              </button>
            </div> */}
          </div>
        </div>
      </div>
        </>
    )
}

export default CardDetail