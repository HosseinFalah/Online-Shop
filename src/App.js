//Context
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Store from './Components/Store';
import Navbar from './Components/Navbar';
import ShopCart from './Components/ShopCart';
import ProductDetails from './Components/ProductDetails';
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from './Context/CartContextProvider';
import './App.css';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="/cart" element={<ShopCart/>}/>
            <Route path="*" element={<Navigate to="/products"/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App