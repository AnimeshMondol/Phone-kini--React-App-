import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    //const {cart} = props;
    const {name, img} = cart;
    return (
        <div className='cart'>
            <img src={img} alt=""></img>
            <p>{name}</p>
        </div>
    );
};

export default Cart;