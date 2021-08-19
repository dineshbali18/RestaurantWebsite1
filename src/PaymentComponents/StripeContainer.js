import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm';
const PUBLIC_KEY="pk_test_51IZtR0SCs916rYoGKAwVYldgN28YNSddeCpcxZLDNO4MLvsN5aAQWKGaEAxmWexyCmwN6YSAV4hBAbCBpUALOfcH005M78fMIa";

const stripeTestPromise=loadStripe(PUBLIC_KEY)


const StripeContainer = () => {
  return (
    <div>
      <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
      </Elements>
    </div>
  )
}

export default StripeContainer
