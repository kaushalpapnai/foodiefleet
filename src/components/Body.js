   import React, { useEffect } from "react"
   import "../style/Body.css"
   import RestaurentCard from "./RestaurantCard"
   import {useState} from "react"
   import Shimmer from "./Shimmer.js"


   const filterData=(restaurants,searchText)=>{
      const data = restaurants.filter((restaurant)=>
         restaurant.info.name.toLowerCase()?.includes(searchText.toLowerCase())
      )
      return data;
   }

   const Body = ()=>{

      const [searchText,setSearchText] = useState("");
      const [filteredRestaurants,setFilteredRestaurants] = useState([]);
      const [allRestaurants,setAllRestaurants]  = useState([]);

      useEffect(()=>{
         fetchData();
      },[])

      async function fetchData(){
         const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=28.358983&lng=77.55076199999999");
         const json = await data.json()
         setFilteredRestaurants(json?.data?.success?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
         setAllRestaurants(json?.data?.success?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
      }


      return allRestaurants.length === 0 ? (<Shimmer/>) : (
         <>
            <div className="search-container">
               <input
                  type="text"
                  placeholder="search"
                  value={searchText}
                  onChange={(e)=>{
                     setSearchText(e.target.value);
                  }}           
               />
            </div>
            <button
               onClick={()=>{
                  const data = filterData(allRestaurants,searchText)
                     setFilteredRestaurants(data); 
               }}
            
            >Click</button>
            <div id="body-container">
               {filteredRestaurants.length === 0 ? (<h1>restaurant not found</h1>) :
               filteredRestaurants.map((obj) =>{
                  return ( <RestaurentCard {...obj.info}  key={obj.info.id}/>)
               })}
            </div>
         </>
      )
   }

   export default Body