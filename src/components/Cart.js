import React from 'react'
import FoodItem from './FoodItem'
import {useDispatch, useSelector} from "react-redux"
import { clearCart } from '../Utils/cartSlice.js'

function Cart() {

   const dispatch = useDispatch()

    const handleClick=()=>{
      dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items);

  return (
    <>
      <h1 className='font-bold text-3xl'>Cart Items - {cartItems.length}</h1>
      <button className=' bg-green-300 p-2 m-5 border' onClick={()=>handleClick()}>
          clear cart
      </button>
      <div className='flex'>
      {cartItems.map((item)=>{
        return(
          <FoodItem key={cartItems.id} {...item}/>
        )
        })}
      </div>
    </>
  )
}

export default Cart