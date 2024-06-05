// For addding item to cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For delete item from cart 

export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}