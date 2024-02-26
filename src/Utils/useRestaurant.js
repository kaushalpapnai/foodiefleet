import { useState ,useEffect} from "react";

const useRestaurant=(id)=>{
    const [restaurant,setRestaurant] = useState({})
  
    // get data from API

    useEffect(()=>{
     fetchData(id);
    },[]) ;
    
    const fetchData = async(id)=>{
       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
       const jsonData = await data.json();
       setRestaurant(jsonData)
    }

    // return restaurant data

    return restaurant
  
}

export default useRestaurant