import React from "react";
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img  className="card-img bg-white"  height="780px"/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title text-dark display-3  fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text text-dark lead fs-2">CHECK OUT ALL THE TRENDS</p>
              <Link to ="/products">
            <button className="btn btn-primary text-dark text-center">START SHOPPING NOW!</button>
              </Link>
            </div>
          </div>

        </div>
        
      </div>
      
    </>
  );
};

export default Home;
