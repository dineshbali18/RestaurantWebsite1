import { Button } from '@material-ui/core';
import React from 'react'
import Paypal from './Paypal';

const PaypalShow = ({total}) => {
 const [checkout,setCheckout]=React.useState(false);
  return (
    <div>
     {
      checkout?(<Paypal total={total}/>):(
       <Button variant="contained" color="primary" onClick={()=>{setCheckout(true)}}>CheckOut</Button>
      )
     }
      
    </div>
  )
}

export default PaypalShow
