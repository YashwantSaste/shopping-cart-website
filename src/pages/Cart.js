import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CardItem from '../components/CardItem';
import { useState, useEffect } from 'react'
const Cart = () => {

  const {cart}= useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,cur)=>acc +cur.price,0));
  },[cart])
  return (
    <div className='mb-10'>
        {
          cart.length > 0 ?
          (<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {
              cart.map( (item,index) =>{
                return <CardItem key={item.id} item={item} itemIndex={index}/>
              } )
            }
            </div>

            <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
              <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800 ">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                <p>
                  <span
                  className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
              <span className="text-gray-700 font-semibold">Total Amount: {totalAmount}</span> </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition 
              duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
              Checkout Now
              </button>
            </div>
          </div>
            
          </div>) :
           (<div className="min-h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
            <Link to="/">
            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider
             hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">Shop Now</button>
            </Link>
           </div>)
        }
    </div>
  )
}

export default Cart