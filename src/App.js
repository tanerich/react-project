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



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="/products/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
