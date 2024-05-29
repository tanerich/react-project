import React, { useState, useEffect } from "react";
import skeleton from "react-loading-skeleton"




const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    fetch('https://dummyjson.com/products?limit=0&&skip=0')
    .then((res) => res.json())
    .then((json) => {
      setProducts(json.products);
      console.log(json);
    })
    
    setLoading(false);
      },[]);

  const Loading = () => {
    return(
      <>
      <div className="col-md-3">
        <skeleton height={350} />
      </div>
      <div className="col-md-3">
        <skeleton height={350} />
      </div>
      <div className="col-md-3">
        <skeleton height={350} />
      </div>

      
      </>
    )
  };

  const filterProducts = (category) => {
    const updatedList = products.filter((item) => item.category === category)
    setProducts(updatedList);
  
  }

  const ShowProducts = () => {
  
    return (
      <>
        <div className="buttons d-flex justify-content-center mp-5 pb-5">
          <button onClick={() => setProducts(products)} className="btn btn-outline-dark me-2">ALL</button>
          <button onClick ={ () => filterProducts("beauty")} className="btn btn-outline-dark me-2">Beauty</button>
          <button onClick ={ () => filterProducts("smartphones")} className="btn btn-outline-dark me-2">smartphones</button>
          <button onClick ={ () => filterProducts("mens-watches")} className="btn btn-outline-dark me-2">mens-watches</button>
          <button onClick ={ () => filterProducts("tablets")} className="btn btn-outline-dark me-2">tablets</button>
        </div>
        {products.map((product) => (
    <div className="col-md-3 mb-4">
    <div key={product.id} className="card h-100 text-center p-4 ">
        <img src={product.thumbnail} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{product.title.substring(0,12)}...</h5>
            <p className="card-text fw-bold">${product.price}</p>
            <a to="kh" className="btn btn-primary">Buy Now</a>
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
