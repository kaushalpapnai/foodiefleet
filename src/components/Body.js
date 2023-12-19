   import React, { useEffect } from "react"
   import "../style/Body.css"
   import RestaurentCard from "./RestaurantCard"
   import {useState} from "react"
   import Shimmer from "./Shimmer.js"
   import { Link } from "react-router-dom"
   import { filterData } from "../Utils/helper.js"
   import useOnline from "../Utils/useOnline.js"


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
       
      const offline = useOnline()

      if(!offline){
         return <h1> 📍 offline, please check your internet connection</h1>
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
            <div className="body-container">
               {filteredRestaurants.length === 0 ? (<h1>restaurant not found</h1>) :
               filteredRestaurants.map((obj) =>{
                  return(
                      <Link to={"/restaurant/" + obj.info.id} key={obj.info.id}>
                         <RestaurentCard {...obj.info}  />              
                      </Link>
                  )
               })}
            </div>
         </>
      )
   }

   export default Body