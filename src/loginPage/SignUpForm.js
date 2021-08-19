import axios from 'axios';
import React, { useState } from 'react'
import './LoginForm.css'
const SignUpForm = () => {
  const [userName,setUserName]=useState("");
 const [password,setPassword]=useState("");
 const [email,setEmail]=useState("");
const [msg,setMsg]=useState("");
 const handleSubmit= async (e)=>{
  e.preventDefault();
 const {data}=await axios.post("http://localhost:5000/userSignUp",{userName,password,email});
 setMsg(`${data.notify}`)
 console.log(data)
  setUserName("");
  setPassword("");
  setEmail("");
  
 }
  return (
    <div>
      <div className="login_screen">
      <form className="input_">

        <div className="input__name">
          <i className="far fa-user fa-2x"></i>
        <input type="text" id="name" name="name" placeholder="User Name" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>

        <div className="input__name">
        <i className="fas fa-envelope-square fa-2x"></i>
        <input type="text" id="name" name="email" placeholder="Email " value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

         <div className="input__name">
        <i className="fas fa-lock fa-2x"></i>
        <input type="password" id="name" name="phone" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>

        <div className="input__btn">
        <button type="submit" onClick={handleSubmit} id="btn">Sign Up</button>
        </div>

      </form>
      {msg.length>0? <div className="errorMsg" ><h3>{msg}</h3></div>: <div></div>  }
      </div> 
    </div>
  )
}

export default SignUpForm
