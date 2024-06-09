import React from "react";


const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg-img.jpg"  className="card-img"  height="780px"/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title text-dark display-3  fw-bolder mb-0">
                New SEASON ARRIVALS
              </h5>
              <p className="card-text text-dark lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
