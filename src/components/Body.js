import React from "react"
import "../style/Body.css"
import RestaurentCard from "./RestaurantCard"
import restaurant_list_url from "../../config.js"
import {useState} from "react"

const filterData =(searchText,restaurants)=>{
  const data = restaurants.filter((restaurant)=>
     restaurant.info.name.includes(searchText)
  )

  return data;
}


const Body = ()=>{
   const [searchText,setSearchText] = useState("");
   const [restaurants,setRestaurants] = useState(restaurant_list_url);



    return(
        <>
         <div className="search-container">
            <input
               type = "text"
               className = "search-input"
               placeholder = "search"
               value = {searchText}
               onChange = {(e)=>{
                  setSearchText(e.target.value);
               }}
            
            />
            <button onClick={()=>{
                const data = filterData(searchText,restaurants);
                setRestaurants(data);
            }}>
                click
            </button>

         </div>
         <div id="body-container">
             {restaurants.map((obj) =>{
                return ( <RestaurentCard {...obj.info}  key={obj.info.resId}/>)
             })}
         </div>
        </>
    )
}

export default Body