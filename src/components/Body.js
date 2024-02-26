   import React, { useEffect } from "react"
   import RestaurentCard from "./RestaurantCard"
   import {useState,useContext} from "react"
   import Shimmer from "./Shimmer.js"
   import { Link } from "react-router-dom"
   import { filterData } from "../Utils/helper.js"
   import useOnline from "../Utils/useOnline.js"
   import UserContext from "../Utils/userContext.js"


   const Body = ()=>{

      const [searchText,setSearchText] = useState("");
      const [filteredRestaurants,setFilteredRestaurants] = useState([]);
      const [allRestaurants,setAllRestaurants]  = useState([]);
      const {user,setUser} = useContext(UserContext)

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
            <div className="flex justify-center my-5">
               <input
                  className="border-amber-600 border-2 rounded-l-lg  py-1 px-2 border-r-0"
                  type="text"
                  placeholder="search"
                  value={searchText}
                  onChange={(e)=>{
                     setSearchText(e.target.value);
                  }}           
               />
               <input
                value={user.name}
                onChange={(e)=>setUser(
                  {
                      ...user,            // we use spread operator here because by using sperad operator the default value of name and email remains unchange if we modify one of them if we do not use spread operator it get back to its default value when we try to update one of them 
                     name: e.target.value
                  }
                )
                }
               >
               </input>
               <input
                value={user.email}
                onChange={(e)=>setUser(
                  {
                     ...user,
                     email: e.target.value
                  }
                )
                }
               >
               </input>
               <button
                  className=" rounded-r-lg border-amber-600 p-2 bg-amber-600 text-white hover:bg-amber-700"
                  onClick={()=>{
                  const data = filterData(allRestaurants,searchText)
                     setFilteredRestaurants(data); 
               }}
            
               >Click</button>
            </div>
            <div className="flex flex-wrap justify-center">
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