import React, { useState, useEffect} from 'react'
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';


const Cart = ({ sendCartProducts, cartItems }) => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        setCartProducts(cartItems);
    }, [cartItems])

const nav = useNavigate();


const handleFilterCart = (clickedProduct) => {


let updatedCart = [...cartProducts];

let finalUpdatedProducts = updatedCart.filter((p) => p.id !== clickedProduct.id);

updatedCart = finalUpdatedProducts;

sendCartProducts(updatedCart);

setCartProducts(updatedCart);

Swal.fire({
    title: "Product Removed from cart!!",
    icon: "success"
})

};


const fetchTotalPrice = () => {

    let cartValue = cartProducts.reduce((acc, item) => acc + item.price, 0);
    localStorage.setItem("ecc-final-cart-value", cartValue);
    return cartValue;
};




return (
    <>
    {cartProducts?.length === 0 ? (
        <>
        <h1 className="text-center">Your cart is empty</h1>
        <button onClick={() => nav("/products")} type="submit" className="btn btn-primary">
            Products
        </button>
        </>
    ): (
     <>
     
     <h3 className="text-center mx-10"></h3>
     <strong>Total price:</strong>
     {fetchTotalPrice()}
     <div>
        <button onClick={ nav("/checkout")} className="btn btn-primary" type="submit">
         Checkout
        </button>
        
     </div>
     </>
    )}

    {cartProducts.map((cart) => (
    <div className="px-4 my-5 bg-light rounded-3" key={cart.id}>
                <div className="container py-4">
                    <button onClick={()=>handleFilterCart(cart)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cart?.thumbnail} alt={cart?.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cart?.title}</h3>
                            <p className="lead fw-bold">${cart.price}</p>
                        </div>
                    </div>
                </div>
            </div>
))}
    </>
);
};


export default Cart;