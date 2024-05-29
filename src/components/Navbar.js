import React from "react";
import {NavLink, Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">WEBSHOP 2024</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="home">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className= {`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : "")}`} to="about">About</NavLink>
        </li>
      </ul>

        <button className="btn btn-primary bg-dark m-2">
          <Link className="nav-link" to="cart"><BsCartFill />Cart(0)</Link>
        </button>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
