import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContextProvider';
import Cart from '../Shared/Cart';
import style from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext)
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.carts}>
          <div className={style.card}>
            <div className={style.cart_header}>
              Cart_Information
            </div>
            <div className={style.cart_body}>
              {/* Single Item */}
              {state.seletedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
          </div>
        </div>
        {
          state.itemsCounter > 0 && 
          <div className={style.details_carts}>
            <div className={style.cart}>
              <div className={style.cart_header}>
                Summry
              </div>
              <div className={style.cart_body}>
                <ul className={style.cart_list}>
                  <li className={style.cart_link}>Total Price: ${state.total}</li>
                </ul>
                <button className={style.btn_warning} onClick={() => dispatch({type: "CLEAR"})}>Clear Product</button>
                <button className={style.btn_primary} onClick={() => dispatch({type: "CHECKOUT"})}>Go To CheckOut</button>
              </div>
            </div>
          </div>
        }
        {
          state.checkout && <div className={style.checkout}>
            <h3 className={style.checkout__title}>Checked Out SuccessFully</h3>
            <Link to="/products" className={style.btn_success}>Buy More</Link>
          </div>
        }

        {
          !state.checkout && state.itemsCounter === 0 && <div className={style.clearProduct}>
            <h3 className={style.ClearProduct__title}>Want to Buy?</h3>
            <Link to="/products" className={style.btn_success}>Go To Shop</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default ShopCart