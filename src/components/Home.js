import React from "react";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/BG.png" className="card-img"  height="780px"/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3  fw-bolder mb-0">
                New SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
