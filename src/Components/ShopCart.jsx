import "./ShopCart.css";
import {BsTrash, BsPlus} from "react-icons/bs";
import {BiMinus} from "react-icons/bi";

const ShopCart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="carts">
          <div className="card">
            <div className="cart_header">
              Cart_Information
            </div>
            <div className="cart_body">
              {/* Single Item */}
              <div className="col">
                <div className="cart_img">
                  <img src={require('../Asset/Images/71li-ujtlUL._AC_UX679_.jpg')} className="img-fluid" alt="ProductShop" />
                </div>
                <div className="cart_desc">
                  <p><strong>Blue denim shirt</strong></p>
                  <p>Color: Blue</p>
                  <p>Size: M</p>
                  <button className="trash"><BsTrash size={20}/></button>
                </div>
                <div className="cart_btnQuantity">
                  <div className="cart_addQua">
                    <button className="minus"><BiMinus size={20} fontWeight={600}/></button>
                    <div>
                      <input type="number" name="quantity" className="quantityValue" value="1" id="quantity" />
                    </div>
                    <button className="plus"><BsPlus size={20}/></button>
                  </div>
                  <p className="cart_price">$17.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details_carts">
          <div className="cart">
            <div className="cart_header">
              Summry
            </div>
            <div className="cart_body">
              <ul className="cart_list">
                <li className="cart_link">Total Price: $10.98</li>
              </ul>
              <button className="btn-warning">Clear Product</button>
              <button className="btn-primary">Go To CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCart