import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Home/>
    <ProductList/>
    <Routes>
    </Routes>
    </Router>
    </>
  );
}

export default App;
