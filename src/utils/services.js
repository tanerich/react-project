export const BASE_API_URL = "https://dummyjson.com";


// Function to get user data from local sorage
// Retrieves the item with key 'ecc-auth-user' from local storage
// Returns the JSON string into an object
// Returns an empty object if no data is found or if parsing fails

//export const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("ecc-auth-user")) || {};



// Function to get cart data from local storage
// Retrieves the item with key 'ecc-user-cart' from local storage 
// Tries to parse the JSON string into an array
// Returns an empty array if no data is found, if parsing fails, or if an error occured

export const getCartData = () => {
    try {
        return JSON.parse(localStorage.getItem("ecc-user-cart")) || [];
    }
    catch (error) {
        return [];
    }
}