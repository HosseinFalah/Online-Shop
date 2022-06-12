import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import style from './Navbar.module.css';

const Navbar = () => {
  const [ nav, setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className={style.navbar}>
        <div className={style.navbar__container}>
            <h3 className={style.navbar__title}>Products</h3>
            {/* Menu Icon */}
            <div onClick={handleNav} className={style.navbar__mobileMenu}>
                {nav ? <AiOutlineClose className={style.navbar__closeMenu}/> : <BiMenuAltRight className={style.navbar__menubar} />}
                <i className={style.navbar__shoppingCart}>
                  <RiShoppingCart2Line className={style.navbar__icon}/>
                  <span className={style.navbar__quantity}>0</span>
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
                <RiShoppingCart2Line className={style.navbar__icon}/>
                <span className={style.navbar__quantity}>0</span>
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