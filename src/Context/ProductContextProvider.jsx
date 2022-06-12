import React, {useState, useEffect, createContext} from "react";

//API
import { GET_Products } from "../Services/Api";

export const ProductsContext = createContext()

const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const featchApi = async () => {
      setProducts(await GET_Products());
    }

    featchApi()
  }, [])

  return (
    <ProductsContext.Provider value={products}>
       {children}
    </ProductsContext.Provider>
  )
}

export default ProductContextProvider