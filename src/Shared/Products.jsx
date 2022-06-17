import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContextProvider";
import { Shorten, checkInCart, quantityCount } from "../Helpers/Functions";
import { BsPlus, BsTrash } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import style from './Products.module.css';


const Products = ({productData}) => {
  const {state, dispatch} = useContext(cartContext);
  return (
    <div className={style.product}>
        <Link to={`/products/${productData.id}`}><img className={style.product__img} src={productData.image} alt={productData.category} /></Link>
        <div className={style.product__desc}>
          <h3 className={style.product__title}>{Shorten(productData.title)}</h3>
          <p className={style.product__price}>{productData.price} $</p>
          <div className={style.product__btns}>
            <Link to={`/products/${productData.id}`} className={style.mero}>Mero...</Link>
            {quantityCount(state, productData.id) > 1 && <button className={style.product__btnMinus} onClick={() => dispatch({type: "DECREASE", payload: productData})}><BiMinus/></button>}
            {quantityCount(state, productData.id) === 1 && <button className={style.product__btnMinus} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><BsTrash/></button>}
            {quantityCount(state, productData.id) > 0 && <span className={style.quantity}>{quantityCount(state, productData.id)}</span>}
            {
              checkInCart(state, productData.id) ? 
              <button className={style.product__btnPlus} onClick={() => dispatch({type: "INCREASE", payload: productData})}><BsPlus/></button> 
                : 
              <button className={style.product__btn} onClick={() => dispatch({type: "ADD_ITEM", payload: productData})} ><AiOutlineShoppingCart/> Add To Cart</button>
            }
          </div>
        </div>
    </div>
  )
}

export default Products