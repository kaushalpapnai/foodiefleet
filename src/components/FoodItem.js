import React from "react"


const FoodItem = ({name,cloudinaryImageId,locality})=>{
    // const  {name,cuisine,rating} = restaurant1.info;

    return(
        <>
        <div className="w-[200px] m-2 p-2 shadow-lg bg-slate-100 h-50 border-2">
            <img className="w-52 h-44" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="images"></img>
            <h1 className="font-bold text-xl">{name}</h1>
            {/* <h2>{cuisines[0]}</h2> */}
            <h3>{locality}</h3>
          </div>
        </>
    )
}

export default FoodItem