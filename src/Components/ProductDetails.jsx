import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../Context/ProductContextProvider';
import style from './ProductDetails.module.css';

const ProductDetails = () => {
    const paramsUrl = useParams();
    const data = useContext(ProductsContext);
    const product = data[paramsUrl.id - 1];
    const { image, title, description, price, category} = product;

    return (
        <div className={style.product__info}>
            <img className={style.product__img} src={image} alt="products" />
            <div className={style.product__container}>
                <h3 className={style.product__title}>{title}</h3>
                <p className={style.product__description}>{description}</p>
                <p className={style.product__category}><span>Category:</span> {category}</p>
                <div className={style.product__ContainerPrice}>
                    <span className={style.product__price}>${price}</span>
                </div>
                <div className={style.product__ContainerManage}>
                    <div className={style.product__btns}>
                        <Link to="/products" className={style.btnStore}>Back To Store</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails