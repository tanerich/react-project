import React from 'react'

const ShowProduct = () => {
  return (
    <div>
      <div className="card my-2">
                <div className="card-body">
                    <img className="card-img-top" src ={product.thumbnail} alt="product"/>
                    <h5>{`Title:${product.title}`}</h5>
                    <p>{`Category:${product.category}`}</p>
                    <h6>{`Price:${product.price}`}</h6>
                </div>
            </div>
    </div>
  )
}

export default ShowProduct
