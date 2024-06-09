import React, { useState, useEffect} from 'react'
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';


const Cart = ({ sendCartProducts, cartItems }) => {
    const [cartProducts, setCartProducts] = useState([]);


    // useEffect hook to update the cartProducts state whenever carItems prop changes
    useEffect(() => {
        setCartProducts(cartItems);
    }, [cartItems])


// useNavigate hook to programmatically navigate to different hooks
const nav = useNavigate();

// function to handle removal of a product from the cart
const handleFilterCart = (clickedProduct) => {


let updatedCart = [...cartProducts];

// filtering out the products to be removed from the cart
let finalUpdatedProducts = updatedCart.filter((p) => p.id !== clickedProduct.id);


// updating the cart state and notifying the parent component
updatedCart = finalUpdatedProducts;

sendCartProducts(updatedCart);

setCartProducts(updatedCart);

Swal.fire({
    title: "Product Removed from cart!!",
    icon: "success"
})

};

// function to calculate to total price of the cart items
const fetchTotalPrice = () => {

    let cartValue = cartProducts.reduce((acc, item) => acc + item.price, 0);
    localStorage.setItem("ecc-final-cart-value", cartValue);
    return cartValue;
};




return (
    <>
    {/* Displaying a message if the cart is empty */}
    {cartProducts?.length === 0 ? (
        <>
        <h1 className="text-center">Your cart is empty</h1>
        <button onClick={() => nav("/products")} type="submit" className="btn btn-primary">
            Products
        </button>
        </>
    ): (
     <>
     {/* Displaying total price if the cart has products */}
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
{/* Mapping throught cartProducts to display each product */}
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