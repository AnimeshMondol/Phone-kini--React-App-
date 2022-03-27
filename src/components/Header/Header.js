import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <h1>PHONE KINI 📱 </h1>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/about">About</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    );
};

export default Header;