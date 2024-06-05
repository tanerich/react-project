const cart = [];

const handleCart = (state = cart, action) => {

const product = action.payload;

switch (action.type) {
    case "ADDITEM":
        // Check if product already exist
        const exist = state.find((item) => item.id === product.id)
        if(exist) {
            // Increase quantity
            return state.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1} : item);
        } else {

            return [
                ...state,
                {
                    ...product,
                    quantity: 1
                }
            ]
        }

        break;

        case "DELETEITEM":
            // Check if product already exist
            const exist1 = state.find((item) => item.id === product.id )
            if(exist1.quantity === 1 ) {
    
                return state.filter((item) => item.id !== exist1.id )
            } else {
                
                return state.map((item) => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
            }
            break;

    default:
         return  state;
break;

        
}

}

export default handleCart;