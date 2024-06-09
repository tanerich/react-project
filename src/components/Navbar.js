import React from "react";
import {NavLink, Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";




const Navbar = ({ cartData }) => {

  const fetchCartLength = () => {

    return cartData.length;
  };



  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">WEBSHOP 2024</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="/">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className= {`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="/login">Login</NavLink>
        </li>
      </ul>
        <button className="btn btn-primary bg-primary m-2">
          <Link className="nav-link" to="/cart"><BsCartFill/> Cart ({fetchCartLength()})</Link>
        </button>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
