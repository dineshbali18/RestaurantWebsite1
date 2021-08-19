import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { DataContext } from '../App';
import useLocalStorage from '../LocalStorage/LocalStorage';
import "./LoginForm.css"
const LoginForm = () => {
   const history = useHistory();
  const goLogin = () => history.push('/HomePage');
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [msg,setMsg]=useState("");
//  const {setUser,user}=useContext(DataContext);
const [user,setUser]=useLocalStorage("user","");
const handleSubmit= async(e)=>{
e.preventDefault();
const {data}=await axios.post("http://localhost:5000/realLogin",{email,password})
console.log(data);
if(data.status)
{
  console.log("lovelyyyyyy");
  // <Redirect to="/" />
  // sessionStorage.setItem('user',data.name);
  setUser(`${data.name}`)
  setMsg("");
  goLogin()
  window.location.reload();
  // console.log(user) 
}
else{
setMsg(`${data.notify}`)
}
setEmail("");
setPassword("");
}
  return (
    <div>
      
      <div className="login_screen">
      <form className="input_">

        {/* <div className="input__name">
          <i className="far fa-user"></i>
        <input type="text" id="name" name="name" placeholder="User Name" onChange={handleChange} required/>
        </div> */}


        <div className="input__name">
        <i className="fas fa-envelope-square fa-2x "></i>
        <input type="text" id="name" name="email" placeholder="Email " value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

        <div className="input__name">
        <i className="fas fa-lock fa-2x"></i>
        <input type="password" id="name" name="phone" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>

        <div className="input__btn">
        <button type="submit" onClick={handleSubmit} id="btn">Login</button>
        </div>

      </form>
      {msg.length>0? <div className="errorMsg" ><h3>{msg}</h3></div>: <div></div>  }
      </div> 






    </div>
  )
}

export default LoginForm
