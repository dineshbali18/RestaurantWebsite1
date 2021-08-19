import axios from 'axios';
import React, { useState } from 'react'
import './SignUp.css'
const SignUp = () => {

 const [userName,setUserName]=useState("");
 const [password,setPassword]=useState("");
 const [email,setEmail]=useState("");

 const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:5000/userSignUp",{userName,password,email})
  setUserName("");
  setPassword("");
  setEmail("");
 }
 
  return (
 
   <div>
    <div>
     <form action="">
      <input type="text" placeholder="Name" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
     <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
     <button onClick={handleSubmit}>Submit</button>
     </form>
     
     
    </div>
   </div>
 
  )
}

export default SignUp
