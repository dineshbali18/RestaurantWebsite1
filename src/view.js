import React,{useEffect} from 'react'
import data from './data';
import axios from 'axios';
import "./view.css"
import { Button, TextField, Typography } from '@material-ui/core';

function View({match}) {
  const[food,setFood]=React.useState([]);
  const [review,setReview]=React.useState("");
  const[posts,setPosts]=React.useState([]);
  console.log(match.params.id);
     const getdata= async ()=>{
    const {data}= await axios.get("http://localhost:5000/data");
    setFood(data);
}

  useEffect(() => {
 getdata();
}, [])



 
const handleReviewPost=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:5000/reviews",{user:sessionStorage.getItem('user'),review:review,food:product.name})
  setPosts([{users:sessionStorage.getItem('user'),review:review,food:product.name},...posts]);
  setReview("");
}
  const product=food.find((x)=>x.id === match.params.id);

//   const random= async()=>{
//      const Eachproducts= await food.filter((x)=>x.id === match.params.id)
//      console.log(Eachproducts);
//     //  axios.post('http://localhost:5000/foodReview',{food:Eachproduct.name})
      
//   }

//    useEffect(() => {
//     random()
 
//     // const Eachproduct=food.find((x)=>x.id === match.params.id);
//   //  const Eachproduct= random();
//     // console.log(Eachproduct);
//   // axios.post('http://localhost:5000/foodReview',{food:Eachproduct.name})
// },[])

    const handleClick=(e)=>{
   e.preventDefault();
   axios.post("http://localhost:5000/insert",{name:product.name,price:product.price})
 }

 const handleEachReview= async(e)=>{
  e.preventDefault();
 const {data}=await axios.post('http://localhost:5000/foodReview',{food:product.name})
  setPosts(data);
 console.log(data)
 }




  if(!product)
  {
   return <div>Page Not Found ;-;</div>
  }
  return (
    <>
    <div className="intro">

     <div className="img-col">
      <img className="view-img" src={product.image} alt=""/>
     </div>

      <div className="view-content">
        <center className="center">
         <div className="price">
      <Typography variant="h1">{product.name}</Typography>
      <h3>₹{product.price}</h3>
        </div>
        </center>
       

       <div >
      <Typography variant="h4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta blanditiis rerum cupiditate consequuntur excepturi sunt, ratione labore non necessitatibus consectetur, tempore nam, ullam repellendus voluptas consequatur reprehenderit. Aliquam, sint est tenetur voluptate ullam dolor nesciunt distinctio nam.</Typography>
       </div>

      <div className="view-btn">
        <Button variant="outlined" color="primary" onClick={handleClick}>Add to cart</Button>
      </div>
      
      </div>

     
    </div>
    <div className='reviewPost'>
      <form className="review_btn" action="">
      <TextField id="standard-basic" label="Add a public review" value={review} className="review_input" type="text" onChange={(e)=>{setReview(e.target.value)}}/>

       <Button style={{marginLeft:"1rem",marginTop:"1rem"}} color="primary" variant="outlined" onClick={handleReviewPost} >Post</Button>
      </form>
    
     </div>
     <div className='reviewPost'>
       <form action="">
         <Button variant="outlined" color="primary" onClick={handleEachReview}>Check reviews</Button>
       </form>
     </div>

     <div className='Posts'>
       <div className="post_data">
         {posts.map((post)=>{
        const {users,review}=post;
        return(
          <div className="comments">
            <p>{users}</p>
            <h5>{review}</h5>
          </div>
        )
        
      })}
       </div>
     
     </div>
    </>
  )
}

export default View