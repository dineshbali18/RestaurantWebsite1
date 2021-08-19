import React, { useRef, useState } from 'react'
import "./homeStyles.css"
import burger from '../bishPics/pica.png'
import munch from '../bishPics/picb.png'
import juice from '../bishPics/picc.png'

import burgerIcon from '../bishPics/thumb1.png';
import munchIcon from '../bishPics/thumb2.png';
import juiceIcon from '../bishPics/thumb3.png';
import LoginForm from '../loginPage/LoginForm'
import SignUpForm from '../loginPage/SignUpForm'


const HomePage = () => {
 // <script type="text/javascript">
 //        function imgSlider(anything) {
 //            document.querySelector('.pic1').src = anything;
 //        } 
 //        function circolchange(color) {
 //            const circle = document.querySelector('.circle');
 //            circle.style.background = color;

 //        }
 //      </script>
  const circle=useRef(0);
  const textSpan=useRef(0);
  const buttonColor=useRef(0);
 const[image,setImage]=useState(burger);
 const[showLogin,setShowLogin]=useState(false);
 const[showSignUp,setShowSignUp]=useState(false);
 const[showHome,setShowHome]=useState(true);
  return (
    <div className="homepage">

     <section>

      <div ref={circle} className="circle"></div>
      <header>
       <ul>
          <a href="#"  onClick={()=>{setShowLogin(false); setShowSignUp(false)}} ><li>Home</li></a>
            {/* <a href="#"><li>Menu</li></a> */}
            <a href="/Team"><li>Developers</li></a>
            <a href="#" onClick={()=>setShowLogin(true)}><li>Login</li></a>
             <a href="#" onClick={()=>{setShowLogin(false); setShowSignUp(true)}}><li>Sign Up</li></a>
      </ul>
      </header>

      <div className="content">

        <div className="textBox">
                {/* <h1>You don't need a <em>silver fork to eat</em> <span ref={textSpan}>good food.</span> </h1>
                <a ref={buttonColor} href="#">Order Now!</a> */}
               {showLogin?<LoginForm/>: showSignUp?<SignUpForm/>: <div><h1>You don't need a <em>silver fork to eat</em> <span ref={textSpan}>good food.</span> </h1>
                <a ref={buttonColor} href="#">Order Now!</a></div> } 
                {/* <SignUpForm/> */}
         </div>
         <div className="imgBox">
               <img src={image} alt="pic1" className="pic1"/> 
          </div>
            
      </div>
      
       <ul className="thumb">
            {/* <li><img src={burgerIcon} onClick="imgSlider('pica.png'); circolchange('#AED6F1')" alt=""/></li> */}
            <li><img src={burgerIcon} onClick={()=>{
              setImage(burger);
              circle.current.style.backgroundColor="#AED6F1";

            if(showLogin==false && showSignUp==false)
            {
              textSpan.current.style.color="#AED6F1"
              buttonColor.current.style.backgroundColor="#AED6F1"
            }
             
            
              }} alt=""/></li>
            {/* <li><img src={munchIcon} onclick="imgSlider('picb.png'); circolchange('#F1C40F')" alt=""/></li> */}
            <li><img src={munchIcon} onClick={()=>{
              setImage(munch);
              circle.current.style.backgroundColor="#F1C40F"
              if(showLogin==false && showSignUp==false){
                textSpan.current.style.color="#F1C40F"
              buttonColor.current.style.backgroundColor="#F1C40F"
              }
              
              }} alt=""/></li>
            {/* <li><img src={juiceIcon} onclick="imgSlider('picc.png'); circolchange('#E74C3C ')" alt=""/></li> */}
            <li><img src={juiceIcon} onClick={()=>{
              setImage(juice);
              circle.current.style.backgroundColor="#E74C3C"
              if(showLogin==false && showSignUp==false){
              textSpan.current.style.color="#E74C3C"
              buttonColor.current.style.backgroundColor="#E74C3C"
            }
              }} alt=""/></li>
        </ul>
      <ul className="con">
            <li><a href="#"><img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_facebook-512.png" alt=""/></a></li>
            <li><a href="#"><img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png" alt=""/></a></li>
            <li><a href="#"><img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_twitter-512.png" alt=""/></a></li>
        </ul>

     </section>
     











    </div>
  )
}

export default HomePage
