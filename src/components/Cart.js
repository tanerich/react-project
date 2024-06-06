import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from "../redux/action/index"
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(delCart(id))
    }


return (
    <>
    
    {state.map(cart => (
    <div className="px-4 my-5 bg-light rounded-3" key={cart.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cart)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cart.images} alt={cart.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cart.title}</h3>
                            <p className="lead fw-bold">${cart.price}</p>
                        </div>
                    </div>
                </div>
            </div>
    )) }
    </>
)}


export default Cart;