import React,{useEffect,useState} from 'react'
import "./search.css"
// import data from './data'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
const Search=({products,setProducts}) =>{

  

const [food,setFood]=useState([]);
const[find,setFind]=useState("");
const[user,setUser]=useState("")

const getUser= async()=>{
const candidate=await sessionStorage.getItem('user');
setUser(candidate);
}

useEffect(() => {
  getUser();
}, [localStorage.getItem('user')])

    const getdata = async ()=>{
    const {data}= await axios.get("http://localhost:5000/data");
    setFood(data);
}

  useEffect(() => {
 getdata();
}, [])

 const handleSubmitAll=(category)=>{
  if(category==='All')
  {
   setProducts(food);
   return;
  }
 const newProducts= food.filter((product)=>{return product.category===category})
 setProducts(newProducts)
 }


 const findFood=(find)=>{

// setFind(e.target.value);
// e.prevent.default()
const result=food.filter((product)=>{
  if(find == "")
  {
    return product ;
  }
  else if(product.name.toLowerCase().includes(find.toLowerCase()))
   {
     return product;
   }
  
}
)

setProducts(result)
}


  return (
    <div className="search" >

      <div className="all"><Link to="/HomePage"><button className="btn-search" onClick={()=>handleSubmitAll('All')}>All</button></Link></div>
      <div className="breakfast"><Link to="/HomePage"><button className="btn-search" onClick={()=>handleSubmitAll('breakfast')} >Breakfast</button></Link></div>
      <div className="lunch"><Link to="/HomePage"><button className="btn-search" onClick={()=>handleSubmitAll('Lunch')}>Lunch</button></Link></div>
      <div className="dinner"><Link to="/HomePage"><button className="btn-search" onClick={()=>handleSubmitAll('Dinner')} 
      >Dinner</button></Link></div>

      <form action="">
        <div>
        <input className="searchInput" placeholder={`HI...${user==null?'🍔🍟🌭🥣🍰':user}`} type="text" value={find}  onChange={(e)=>{setFind(e.target.value);
        }}/>
        <button  className="searchButton" onClick={(e)=>{e.preventDefault();findFood(find)}}><i class="fas fa-search fa-1x"></i></button>
      </div>
      </form>
      
    </div>
  )
}

export default Search