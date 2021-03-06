import React from 'react'
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import axios from 'axios';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {
 const [success,setSuccess]=React.useState(false);
 const stripe=useStripe();
 const elements =useElements();

const handleSubmit= async(e)=>{
 e.preventDefault();
 const {error,paymentMethod}=stripe.createPaymentMethod({
  type:"card",
  card:elements.getElement(CardElement)
 })

 if(!error)
 {
  try {
   const {id}=paymentMethod;
   const res=await axios.post("http://localhost:5000/payment",{
    amount:1000,
    id
   })

   if(res.data.success){
    console.log("Success")
    setSuccess(true);
   }
  } catch (error) {
   console.log("error",error)
  }
 }
 else{
  console.log(error.message)
 }

}

  return (
   
    <>
     {!success ? 
     <form onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
       <div className="FormRow">
        <CardElement options={CARD_OPTIONS}></CardElement>
       </div>
      </fieldset>
      <button type="submit">Pay</button>
     </form>
     :
     <div>
      <h1>Payment Successful!!</h1>
     </div>
     
    }
    </>
  )
}

export default PaymentForm
