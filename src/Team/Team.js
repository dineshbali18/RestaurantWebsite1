import React from 'react'
import './team.css'
const Team = () => {
  return (
 <div className="team_page">


    <div className="circle1"></div>
    <header>
        {/* <!-- <a href="#" className="logo"><img src="./Logo.png" style="height: 150px;"></a> --> */}
        <ul>
          {/* <!-- <a href="#"><li>Home</li></a> -->
          <!-- <a href="#"><li>Menu</li></a>
          <a href="#"><li>About Us</li></a>
          <a href="#"><li>Contact Us</li></a>
           <a href="#"><li>Sign In</li></a> --> */}
           </ul>
      </header>
    <div className="containers">
       {/* <center><h1 style="color: white;font-weight: bolder;">MEET THE <br>TEAM</br></h1></center> */}
         <div className="card">
            <div className="imgBoxes">
                <img src="https://i.pinimg.com/564x/df/cf/1a/dfcf1afbae0ae79e5a287dff2a8b7385.jpg" alt=""/>
            </div>
            <div className="contents">
                 <h1>GAYATHRI </h1>
                 <p>Team Lead <br/> Frontend developer <br/> <br/> likes:coffee,bishes <br/>dislikes: nerds </p>
                 {/* <p> Team Lead,<br/>Frontend developer <br/> <br/>likes:coffee,bishes <br/>dislikes: nerds</p> */}
            </div> 
         </div>
        <div className="card">
            <div className="imgBoxes">
             <img src="https://i.pinimg.com/564x/5d/58/bb/5d58bbc83229aad332f3cd39e857ab33.jpg" alt=""/>
            </div>
            <div className="contents">
                 <h1>YASWANTH </h1>
                 <p> Fullstack developer <br/><br/> likes: Adriana Lima <br/>dislikes:social <br/>interaction </p>
                 {/* <p> Fullstack developer <br/><br/> likes: Adriana Lima <br/>dislikes:social <br/>interaction </p> */}
            </div> 
         </div>
         <div className="card">
            <div className="imgBoxes">
             <img src="https://i.pinimg.com/236x/b0/b9/00/b0b900e3742560c2f740c3b5b871e5a7.jpg" alt=""/>
            </div>
            <div className="contents">
                 <h1>JANVI</h1>
                 <p>Frontend developer <br/> <br/> likes: Jungkook,BTS <br/>dislikes: no-jams <br/> people</p>
            </div> 
         </div>
         <div className="card">
            <div className="imgBoxes">
             <img src="https://i.pinimg.com/564x/45/37/bd/4537bd9b68d10c186dd198721781de70.jpg" alt=""/>
            </div>
            <div className="contents">
                 <h1>DINESH</h1>
                 <p>Backend developer <br/><br/> likes:stupid <br/> people <br/>dislikes: marie <br/> biscuits</p>
            </div> 
         </div>
    </div>




 </div>
  )
}

export default Team
