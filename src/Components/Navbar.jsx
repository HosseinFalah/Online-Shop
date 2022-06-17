import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { cartContext } from '../Context/CartContextProvider';
import style from './Navbar.module.css';

const Navbar = () => {
  const [ nav, setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  const {state} = useContext(cartContext)

  return (
    <nav className={style.navbar}>
        <div className={style.navbar__container}>
            <Link to="/products" className={style.navbar__title}>Products</Link>
            {/* Menu Icon */}
            <div onClick={handleNav} className={style.navbar__mobileMenu}>
                {nav ? <AiOutlineClose className={style.navbar__closeMenu}/> : <BiMenuAltRight className={style.navbar__menubar} />}
                <i className={style.navbar__shoppingCart}>
                  <Link to="/cart"><RiShoppingCart2Line className={style.navbar__icon}/></Link>
                  <span className={style.navbar__quantity}>{state.seletedItems.length}</span>
                </i>
            </div>
            {/* Mobile Menu */}
            <div className={nav ? style.MenuMobile : style.MenuMobileNone}>
                <ul className={style.MenuMobile__container}>
                    <li className={style.MenuMobile__border}>
                      <button className={style.navbar__SignIn}>Sign In</button>
                    </li>
                    <li className={style.MenuMobile__border}>
                      <button className={style.navbar__SignUp}>Sign Up</button>
                    </li>
                </ul>
            </div>
            <div className={style.navbar__ContainerManage}>
              <i className={style.navbar__shoppingCart}>
                <Link to="/cart"><RiShoppingCart2Line className={style.navbar__icon}/></Link>
                <span className={style.navbar__quantity}>{state.seletedItems.length}</span>
              </i>
              <div className={style.navbar__btns}>
                <button className={style.navbar__SignIn}>Sign In</button>
                <button className={style.navbar__SignUp}>Sign Up</button>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar