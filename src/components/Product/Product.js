import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const Product = ({ product, handleAddToCart }) => {

    const { name, img, seller, price } = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>Product Name: {name}</p>
                <p className='product-price'>Price: {price} ৳</p>
                <p><small>Seller: {seller}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;