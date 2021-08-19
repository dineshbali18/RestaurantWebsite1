import React,{useContext} from 'react'
import './products.css'
import {Link} from 'react-router-dom';
import {DataContext} from "./App"
import Axios from 'axios';
import ItemAdded from './ItemAdded';
import {Button, IconButton, Typography } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { blue } from '@material-ui/core/colors';

function Products({id,name,price,image}) {
  const [item,setItem]=React.useState({});
  const [displayMsg,setDisplayMsg]=React.useState(false)
 const {carts,setCarts}=useContext(DataContext);
  const[user,setUser]=React.useState(sessionStorage.getItem('user'))
 const handleClick=(e)=>{
   e.preventDefault();
   Axios.post("http://localhost:5000/insert",{name:name,price:price,user:user})
   setDisplayMsg(true)
   setTimeout(()=>{setDisplayMsg(false)},800)
   
 }
 
  return (
    <div className="each-product">
     <Link to={`/view/${id}`}>
     <img className="img" src={image} alt="" width='280px' height="250px"/>
     </Link>
      
      <div className="details">
       <div >
         <Typography variant="h4">{name}</Typography>
     
      <Typography variant="h5">₹{price}</Typography>
      
      </div>
      {displayMsg
      ?
      <ItemAdded/>
      :<div></div>}
      <div>
  {/* <Button variant="outlined" style={{color:'#000' }}  onClick={handleClick}    aria-label="add to shopping cart">
   <Typography variant="h5"></Typography><AddShoppingCartIcon   fontSize='large' /> 
</Button> */}
        {/* <Button variant="outlined" color="primary">Add</Button> */}
      {/* <button className="myButton" onClick={handleClick} ><h4>Add</h4></button> */}
      <button className="myButton" onClick={handleClick} >Add</button>
     
      </div>
      

      
      </div>
      
      
    </div>
  )
}

export default Products