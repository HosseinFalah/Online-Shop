import { Link } from "react-router-dom";
import { Shorten } from "../Helpers/Functions";
import style from './Products.module.css';

const Products = ({productData}) => {
  return (
    <div className={style.product}>
        <Link to={`/products/${productData.id}`}><img className={style.product__img} src={productData.image} alt={productData.category} /></Link>
        <div className={style.product__desc}>
          <h3 className={style.product__title}>{Shorten(productData.title)}</h3>
          <p className={style.product__price}>{productData.price} $</p>
          <div className={style.product__btns}>
            <Link to={`/products/${productData.id}`} className={style.mero}>Mero...</Link>
            <button className={style.product__btn}>Add To Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Products