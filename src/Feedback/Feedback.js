import axios from 'axios';
import React, { useState } from 'react'
import "./feedback.css"
const Feedback = () => {

  const[name,setName]=useState("");
  const[feedback,setfeedback]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
     axios.post("http://localhost:5000/feedback",{customer_name:name,feedback:feedback});
     setName("");
     setfeedback("");
  }

 

  return (
    
   <div className="feedback" >


   <div className="feed_box">


    <form >
      <div className="cross mb-10">
       <button onClick={()=>window.location.reload} >X</button>
      </div>
      <div className="feed_btn mb">
       <h3>Your opinion matters!</h3>
      </div>
      <div>
        <input className="login_input_" type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
       </div>

       <div>
        <input className="login_input_" type="text" placeholder="feedback" value={feedback} onChange={(e)=>{setfeedback(e.target.value)}} />
       </div>

       <div className="feed_btn">
        <button type="submit" onClick={handleSubmit} className="myButton">submit</button>
       </div>
    </form>

 

   </div>

   </div>

    
  )
}

export default Feedback
