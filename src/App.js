import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import ProductList from './components/ProductList';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from "./components/Login/Login"
import { useState, useEffect} from "react"
import { getCartData } from "./utils/services"



function App() {

  const [cartData, setCartData] = useState([]); // Definning the state to hold cart data
  //const {id, auth} = getUserFromLocalStorage(); // Destructuring user id and auth status from local staorage



  // useEffect hook to load cart data when component mount.
  useEffect(() =>{
    let cartData = getCartData();
    setCartData(cartData);
  },[]);


  return (
    <>
    <Router>
    <Navbar cartData={cartData}/>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/products" element={<ProductList/>}/>
    {/*function to handle adding a new product to the cart*/}
    <Route path="/products/:id" element={<Product sendNewProduct={(p) => { 
      setCartData([...cartData,p]);
      localStorage.setItem(
        "ecc-user-cart",
        JSON.stringify([...cartData, p])
      )
    }}
     />
     }
     />
     {/*function to handle updating cart product*/}
    <Route path="/cart" element={<Cart cartItems={cartData}  sendCartProducts ={(e) => {
      setCartData(e);
      localStorage.setItem("ecc-user-cart", JSON.stringify(e));
    }} />}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
