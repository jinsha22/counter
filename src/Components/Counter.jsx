import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementbyAmount, reset } from "../Redux/CounterSlice"


function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.CounterSlice.count)
  const [amount,setAmount] =useState(0)
  const  handleIncrement = ()=>{
    if(amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }else{
      alert("Enter valid Amount")
    }
  }
    return (
      <div id='abcd' className="  justify-content-evenly mt-5 ">
         <h2>{count}</h2>
     
  
      <button onClick={()=>dispatch(increment())} className='btn btn-success m-2 '>Increment </button> 
      <button   onClick={()=>dispatch(decrement())} className='btn btn-primary m-2' >Decremnet</button>
      <button  onClick={()=>dispatch(reset())} className='btn btn-danger m-2'>Reset</button> 


  <div className="d-flex justify-content-between mt-5 w-100">
    <input onChange={e=>setAmount(e.target.value)} value={amount||""}   type="text" className="form-control" 
     placeholder="Enter the amount to be incremented!!"/>
    <button onClick={handleIncrement} className='btn btn-success m-2 '>Increment by Amount</button> 

  </div>
  </div>
  )
    }


export default Counter