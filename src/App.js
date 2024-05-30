import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import ProductList from './components/ProductList';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="/products/:id" element={<Product/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
