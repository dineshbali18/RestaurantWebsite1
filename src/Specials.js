import React from 'react'
import Stories from 'react-insta-stories';
import { useHistory } from "react-router-dom";
import Background from './images/background.jpeg'
const Specials = () => {
// const [showStory,setShowStory]=useState(false);
let history = useHistory();
const images=["https://i.pinimg.com/564x/a1/9e/08/a19e085860835d9b79fa9762d2124324.jpg",
"https://i.pinimg.com/564x/cd/71/75/cd717535d3187a7de2c26195973e0ea7.jpg",
"https://i.pinimg.com/564x/01/53/87/015387cd4627657891e3f7239406385e.jpg","https://i.pinimg.com/564x/02/b9/e5/02b9e53ccb2ab2c81a1c6010af6796cf.jpg","https://i.pinimg.com/564x/a5/f0/4f/a5f04fa3b10ec68ed8a8c82072e7042b.jpg"
]

  

  return ( 
    <div className="back" style={{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop:'10px',
      position: 'absolute',
      width: '100%' ,
      height: '100%',
      top:"0",
      zIndex:"1000",
      backgroundColor:'white',
      // backgroundImage: url("./images/background.jpeg")
      backgroundImage:'./images/background.jpeg'

    }}>
      {/* <button onClick={()=>{setShowStory(true)}}>Specials</button>
      {showStory? */}
      <Stories
            
            storyStyles={{
              height:"100%",
              width:"100%",
            }}
            stories={images}
            defaultInterval={1500}
            // loop={true}
            width={480}
            height={700}
            // onAllStoriesEnd={()=>{setShowStory(false)}}
            onAllStoriesEnd={()=>{ history.goBack() }}
        />
        {/* : <div></div>} */}
    </div>
  
  )
}

export default Specials;

