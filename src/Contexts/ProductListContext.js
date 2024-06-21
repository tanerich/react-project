import { createContext, useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/services";

 export const ProductContext = createContext();

 export const ProductProvider = ({children}) => {



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


    return( 
    <ProductContext.Provider value={{
        title: "SHOOOPER2.0",
        products,
        setProducts,
        loading,
        setLoading,
        Loading
        }}>
{children}
    </ProductContext.Provider>
    )
}