import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="/products/:id" element={<Product/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
