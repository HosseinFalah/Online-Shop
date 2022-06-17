import React, {useContext} from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus, BsTrash } from "react-icons/bs";
import { cartContext } from "../Context/CartContextProvider";
import { Shorten } from "../Helpers/Functions";
import style from "./Cart.module.css";

const Cart = ({data}) => {
    const { dispatch } = useContext(cartContext);
    const { image, title, price, quantity } = data
    return (
        <div className={style.col}>
            <div className={style.cart_img}>
                <img src={image} className={style.img_fluid} alt="ProductShop" />
            </div>
            <div className={style.cart_desc}>
                <p>Product Name: <strong>{Shorten(title)}</strong></p>
                <p className={style.price}>Price: ${price}</p>
            </div>
            <div className={style.cart_btnQuantity}>
                <div className={style.cart_addQua}>
                    {
                        quantity > 1 ? <button className={style.minus} onClick={() => dispatch({type: "DECREASE", payload: data})}><BiMinus size={20} fontWeight={600}/></button>
                         : 
                        <button className={style.trash} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><BsTrash size={20}/></button>
                    }
                    <span className={style.cart_quantity}>{quantity}</span>
                    <button className={style.plus} onClick={() => dispatch({type: "INCREASE", payload: data})}><BsPlus size={20}/></button>
                </div>
            </div>
        </div>
    )
}

export default Cart