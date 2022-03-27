import React from 'react';
import './Product.css'

const Product = ({product}) => {
    // const {product} = props;
    const {name, img, seller, price} = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>Product Name: {name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add TO Cart</p>
            </button>
            
        </div>
    );
};

export default Product;