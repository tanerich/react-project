import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"


const Product = () => {

  const {id} = useParams();
  const[product, setProduct] = useState([]);
  const[loading, setLoading] = useState(false);


  useEffect(() => {


    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`)
        setProduct( await response.json());
        setLoading(false);

    }
    getProduct()
  },[])

const Loading = () => {
  return (
    <>
    Loading....
    </>
  )
}

const ShowProduct = () => {
return (
   <>
   <div className="col-md-6">
    <img src={product.thumbnail} alt={product.title}
    height= "400px" width="400px" />
   </div>
   <div className="col-md-6">
    <h4 className="text-uppercase text-black-50">
    {product.category}
    </h4>
    <h1 className="display-5">{product.title}</h1>
    <p className="lead">Rating {product.rating}</p>
    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
    <p className="lead">{product.description}</p>
    <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
    <NavLink to="/cart" className="btn btn-dark ms-2 px-3">Go to Cart</NavLink>
   </div>

   
   </>


)

}


  return (
    <div className="container py-5">
      <div className="row ">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  )
}

export default Product;
