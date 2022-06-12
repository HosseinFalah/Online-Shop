import React, { useContext } from 'react';
import { ProductsContext } from '../Context/ProductContextProvider';
import Products from '../Shared/Products';
import style from './Store.module.css';

const Store = () => {
    const products = useContext(ProductsContext)
    return (
        <div className={style.products}>
            {
                products.map((product) => <Products key={product.id} productData={product}/>)
            }
        </div>
    )
}

export default Store