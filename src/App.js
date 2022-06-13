//Context
import ProductContextProvider from './Context/ProductContextProvider';
import Store from './Components/Store';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails';
import './App.css';
import CartContextProvider from './Context/CartContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="*" element={<Navigate to="/products"/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App