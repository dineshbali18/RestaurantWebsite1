import React ,{useEffect}from 'react';
import './App.css'
import Products from './products';
// import data from './data';
import Search from './Search';
import Cart from "./cart";
import axios from 'axios';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import View from './view';
import Aboutus from './Aboutus'
import Specials from './Specials';
import StripeContainer from './PaymentComponents/StripeContainer';
import PaypalShow from './PaymentComponents/PaypalShow';
import Feedback from './Feedback/Feedback';
import HomePage from './IntroPage/HomePage';
import Login from './loginPage/Login';
import Team from './Team/Team';
import SignUp from './loginPage/SignUp';
import tailwin1 from './tailwin1'
export const DataContext=React.createContext();


const AllProducts=({products,setProducts})=>{
 return( <div className="again">
  
  {
      products.map((product,index)=>{
       return <Products id={index} {...product}/>
     })
  }
  
  </div>)

}

function App() {
  // const[user,setUser]=React.useState(localStorage.getItem('user'));
  // const [userCart,setUserCart]=React.useState([]);
  const [products,setProducts]= React.useState([]);
  const[carts,setCarts]=React.useState([]);
  const getdata= async ()=>{
    const {data}= await axios.get("http://localhost:5000/data");
    setProducts(data);
}
  useEffect(() => {
 getdata();
 
}, [])

// const handleClick= async ()=>{
  
//   const {data}=axios.post("http://localhost:5000/userCart",{user:user})
//   setUserCart(data);
// }
// console.log(user)
  return (
    <DataContext.Provider value={{carts,setCarts}}>
    <Router>
         <div className="screen">
  <nav className="row">
   <div className="screen__logo">
     <a href="/homePage">Lunch Box</a>
     </div>
     {/* <div>
       <p>HELLO {localStorage.getItem('user')}</p>
     </div> */}
   <div>
    <a  className="added" href="/cart">Cart</a>
    <a href="/about">About Us</a>
    <a href="/Specials">Specials</a>
   <a href="/">Logout</a>
   </div>
   <tailwin1/>
  </nav>
  <main>
   
    {/* <StripeContainer/> */}
    {/* <PaypalShow/> */}
    {/* <div className="feedback" >
      <Feedback/>
    </div> */}
    {/* <Login></Login> */}
  <Search products={products} setProducts={setProducts}/>
  <Route  path="/HomePage" render={() => <AllProducts products={products}/>} exact></Route>
    <Route  path="/view/:id" component={View} exact></Route> 
    <Route  path="/cart" render={() => <Cart />  } exact></Route>  
   <Route  path="/about" render={() => <Aboutus/>  } exact></Route> 
   <Route path="/Specials" render={() => <Specials/>}  exact></Route> 
    <Route path="/" component={HomePage} exact></Route>
   {/* <Route path="/SignUp" component={SignUp} exact></Route>
    <Route path="/login" render={()=><Login setUser={setUser}/>}  exact></Route> */}
   <Route path="/Team" component={Team} exact ></Route>
  </main>
  <footer className="row center">
   {/* <h4>© All Rights Reserved</h4> */}
  </footer>
 </div>

 </Router>
  </DataContext.Provider>
  );
}

export default App;
