import React, { useEffect, useRef } from 'react'

const Paypal = ({total}) => {
 const paypal=useRef();
 useEffect(()=>{
  window.paypal.Buttons({
   createOrder:(data,actions,err)=>{
    return actions.order.create({
     intent:"CAPTURE",
     purchase_units:[
      {
       description:"lunch-box food",
       amount:{
        currency_code:"INR",
        value:total
       }
      }
     ]
    })
   },
   onApprove:async(data,actions)=>{
    const order=await actions.order.capture();
    console.log(order);
   },
   onError:(err)=>{
    console.log(err)
   }
  }).render(paypal.current)
 },[])
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

export default Paypal
