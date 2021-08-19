import axios from 'axios';
import React, { useState,useContext ,useEffect} from 'react'
import { DataContext } from './App';
import Feedback from './Feedback/Feedback';
import PaypalShow from './PaymentComponents/PaypalShow';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Box, Button, Typography } from '@material-ui/core';

function Cart() {
  const[item,setItem]=useState([]);
   const[loading,setLoading]=useState(false);
  const[error,setError]=useState(false);
  const[total,setTotal]=useState(0);
  const[user,setUser]=useState(sessionStorage.getItem('user'))
  const[cartData,setCartData]=useState([]);
  // const {user}=useContext(DataContext);
  const getCartData=async ()=>{
    try
    {
      setLoading(true);
  const {data}=await axios.post("http://localhost:5000/userCart",{user:user});
  //  setCartData(data);
  setLoading(false);
   setItem(data);
   console.log(data);
    }
    catch
    {
      setError(true);
      setLoading(false);
    }
 
  }
 useEffect(() => {
   getCartData();
 }, [])

const [showFeedBox,setShowFeedBox]=useState(false)

  const handleFeedClick=()=>{
    setShowFeedBox(true)
  }
//   const getUserName=async ()=>{
//     const {data}= await axios.post("http://localhost:5000/realLogin");
  
//       console.log(data);
    
//   }

//   useEffect(()=>{
// getUserName();
//   },[])
 
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:5000/delete/${id}`).then((res)=>{
      setItem(item.filter((node)=>{
        return node.id !== id;
      }))
    })
    // setItem()
    // window.location.reload();
  }
  // const getcartItems=async()=>{
  //   try{
  //     setLoading(true);
  //     const {data}=await axios.get('http://localhost:5000/read')
  //     setLoading(false);
  //     setItem(data);
  //   }
  //   catch
  //   {
  //     setError(true);
  //   setLoading(false);
  //   }
    
  // }
  const getTotalPrice=()=>{
   let sum=0;
   for(let i=0;i<item.length;i++)
   {
    sum+= parseInt(item[i].price);
   }
  //  console.log(sum);
   setTotal(sum);
  }
  useEffect(()=>{
    getTotalPrice();
  },[item])
  // useEffect(()=>{
  //  getcartItems();
  // },[])
  // const {carts,setCarts}=useContext(DataContext);
   if(error)
 {
   return  <div className="error"><img src="https://media3.giphy.com/media/DYJJkeOnkk0Le0mf9a/200w.webp?cid=ecf05e47ant61bmrzhbkybu3oejxkuh3j52mmdy8hv6hbdc1&rid=200w.webp" alt=""/></div>
 }
 if(loading)
 {
   return <div className="error" ><img src="https://media3.giphy.com/media/FbbRaTLzKXzA3K1q8U/200w.webp?cid=ecf05e47w6dyq98mklrxvog86jh5lr2d0t9x9m2d8hhkogfs&rid=200w.webp" alt="" width="150rem" height="150rem"/></div>
 }
 if(item.length==0)
 {

   return <div className="error" >
     <img src="https://media3.giphy.com/media/PFrfp4s3Pnf0xBhZJT/200.webp?cid=ecf05e474j62vjxx4b7frf6hwsp7r6z0xbi5kmvbtqcih3qi&rid=200.webp" alt="" width="150rem" height="150rem"/>
     <h3>  Cart is Empty</h3>
   </div> 
 }
  return (
    <div>
      {
        
        item.map((cart)=>{
          const {food,price,id}=cart;
          return(
            <div className="cartItem">
              <div className="cart_data">
              
                <div className="cartItem__name">
                  <Typography variant="h3" >{food}</Typography>
              
              </div>
              <div>
              <p>₹{price}</p>
             
              </div>

              <div className="remove-btn">
               {/* <button className="myButton" onClick={()=>handleDelete(id)}></button> */}
               <DeleteRoundedIcon style={{cursor:"pointer"}} color="primary" fontSize="large" onClick={()=>handleDelete(id)}/>
              </div>

              </div>
              
              
            </div>
            
          )
        })
      }
      
      <center>
        <Typography color="primary" style={{marginBottom:"2rem"}} variant="h3">Total Price : ₹{total}</Typography>
       {total>0?<PaypalShow total={total}/>: <div></div> }
      </center>
      {showFeedBox?<Feedback/>:<Button style={{
        position:"absolute",
        top:"15rem",
        right:10,
        // borderRadius:"50%",
        // backgroundColor:"yellow",
        cursor:"pointer"

      }} onClick={handleFeedClick}>
        <i class="fas fa-comments fa-3x"  ></i>
      </Button>}
      
    </div>
  )
}

export default Cart