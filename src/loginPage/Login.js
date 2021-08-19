import axios from 'axios';
import React, { useState } from 'react'
// import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
import './SignUp.css'

const Login = () => {
  const history = useHistory();
  const goLogin = () => history.push('/HomePage');
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

const handleSubmit= async(e)=>{
e.preventDefault();
const {data}=await axios.post("http://localhost:5000/realLogin",{email,password})
console.log(data);
if(data.status)
{
  console.log("lovelyyyyyy");
  // <Redirect to="/" />
  goLogin()
}
setEmail("");
setPassword("");
}

  return (
    <div className="emo">
       <div className="login__box">
     <form action="" className="form__box">
      <input className="login_input" type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input className="login_input" type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={handleSubmit} >login</button>
     </form>
     
    </div>
    </div>
   
    
  )
}

export default Login
