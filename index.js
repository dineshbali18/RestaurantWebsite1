const express=require("express");
const path=require("path")
// const mongoose=require("mongoose");
// const data=require("./data")
const cors=require("cors");
const mysql=require("mysql");
const bcrypt=require('bcrypt')

const app=express();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// require('dotenv').config();
app.use(express.json());
app.use(cors())
// const CartModal=require("./cartsdata");
// const FeedBack = require("./Modals/Feedback");
// mongoose.connect(process.env.DB_CONNECTION,{
//  useNewUrlParser:true,
//  useUnifiedTopology: true 
// })

 

// app.get("/data",(req,res)=>{
//  res.send(data)
// })



// app.post('/feedback',async(req,res)=>{
//  const customer_name=req.body.customer_name;
//  const feedback=req.body.feedback;
//  const feed=new FeedBack ({userName:customer_name,feedback:feedback})
//  try{
//   await feed.save();
//   res.send("feedback sent")
//  }
//  catch(err)
//  {
//   console.log(err);
//  }
// })





// app.get("/read",async(req,res)=>{
//  CartModal.find({},(err,result)=>{
//   if(err)
//   {
//    res.send(err);
//   }
//   res.send(result);
//  })
// })




const db=mysql.createConnection({
 user:"root",
 host:"localhost",
 password: "password",
 database:"foodapp"
});
console.log(db);


// app.post('/like',(req,res)=>{

// })






app.get("/data",(req,res)=>{
 // res.send(data)
 db.query(`select * from products`,(err,result)=>{
  res.send(result);
 })
})

app.delete('/delete/:id',async (req,res)=>{
 const id=req.params.id;
 // await CartModal.findByIdAndRemove(id).exec();
 await db.query("DELETE FROM cart WHERE id=?",id,(err,result)=>{
  if(err)
  {
   console.log(err);
  }
 })
 res.send("deleted!!")
})

app.post('/insert',async(req,res)=>{
 const itemname=req.body.name;
 const itemprice=req.body.price;
 const user=req.body.user;
 // const cart=new CartModal({name:itemname,price:itemprice,user:user})
 // try{
 //  await cart.save();
 //  res.send("items added!!")
 // }
 // catch(err)
 // {
 //  console.log(err);
 // }
 db.query("INSERT INTO cart (user,food,price) values (?,?,?)",[user,itemname,itemprice],(err,result)=>{
  if(err)
  {
   console.log(err);
  }
 })
})

app.post("/reviews",(req,res)=>{
  // const id=req.body.id;
  const user=req.body.user;
  const review=req.body.review;
  const food=req.body.food;
  db.query("INSERT INTO reviews (users,review,food) values (?,?,?)",[user,review,food],(err,result)=>{
    if(err)
    {
      console.log(err);
    }
  })
})

app.post("/foodReview",(req,res)=>{
  const food=req.body.food;
  db.query('select * from reviews where food=?',[food],(err,result)=>{
    if(result)
    {
      res.send(result);
    }
  })
})

app.post('/userCart',(req,res)=>{
 const user=req.body.user; 
 db.query(' select * from cart where user = ? ',user,(err,result)=>{
   if(err)
  {
   console.log(err);
  }
  else{ 
   // console.log(result); 
   res.send(result);
  }
 })
})
app.post('/userSignUp',(req,res)=>{
 const name=req.body.userName;
 const password=req.body.password;
 const email=req.body.email;

 bcrypt.hash(password,10,(err,hash)=>{
  if(err)
  {
   console.log(err);
  }
  db.query(
  "INSERT INTO loginData (username,email,passwords) values (?,?,?)",[name,email,hash],(errorr,result)=>{
    if(errorr)
    {
      res.send({notify:"SIGNUP FAILED 🙁"})
    }
    else{
      res.send({notify:" SIGNUP SUCCESSFULL 🤗"})
    }
  //  console.log(err);
  }
 )
 }) 
 
})


// const isAuth=()=>{

// }








app.post('/realLogin',(req,res)=>{
 const email=req.body.email;
 const password=req.body.password;
 db.query("select * from loginData where email=?;",email,(err,result)=>{
  if(err)
  {
   res.send({notify:"sorry",status:false});
  }
  if(result.length > 0)
  {
   bcrypt.compare(password,result[0].passwords,(error,response)=>{
    if(response)
    { 
     console.log("true");
     res.send({name:`${result[0].userName}`,status:true})
     // res.send(response) 
    }
    else{
     console.log("false")
     res.send({notify:"wrong password 😕",status:false})
    }
   })
  }
  else
  {
   res.send({notify:"Looks like, you haven't signedUp 😕",status:false})
   console.log("false")
  }
 }
 )
})

// const IsAuth=()=>{
//   myStorage = window.sessionStorage;
//   let data = sessionStorage.getItem('user');
//   if(data==user.name){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

app.listen(5000,()=>{
 console.log("Server is up and running")
})
