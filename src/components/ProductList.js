import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_API_URL } from "../utils/services";



const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
     
    setLoading(true);
    
    fetch(`${BASE_API_URL}/products`)
    .then((res) => res.json())
    .then((json) => {
      setProducts(json.products);
      //console.log(json);
      setLoading(false);
    })
    
      },[]);

  const Loading = () => {
    return(
      <>
    Loading.....
      </>
    )
  };

  

  const ShowProducts = () => {
  
    return (
      <>
        {products.map((product) => (
    <div key={product.id} className="col-md-3 mb-4">
    <div className="card h-100 text-center p-4 ">
        <img src={product.thumbnail} alt={product.title} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{product.title.substring(0,12)}...</h5>
            <p className="card-text fw-bold">${product.price}</p>
            <NavLink to={`/products/${product.id}`} className="btn btn-primary">Buy Now</NavLink>
        </div>
    </div>
</div>
            )
        )}
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
};

export default ProductList;
