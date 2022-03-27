import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [, setRandom] = useState([]);
    const [freeCart, setFreeCart] = useState([]);

    useEffect( () =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);


    const handleAddToCart = (product) =>{
        console.log(product);
        if(cart.length < 4){
            const newCart = [...cart, product];
            setCart(newCart);
        }
        else{
            alert("Sorry you cannot add more then 4 items!!");
        }
        
    }

    const handleChooseOneForMe = (cart) =>{
        console.log(cart);
       
        const newProduct = Math.floor(Math.random()*cart.length);
        setRandom(newProduct);
        console.log(newProduct);
    }

    const handleChooseNew = (freeCart) =>{
        const newNewCart = [];
        setFreeCart(newNewCart);
        console.log(newNewCart);
    }

    return (
        <div className='shop-container'>
           
            <div className='product-container'>
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
            <h1>Ordered Item</h1>
            <p>Total Selected Items: {cart.length}</p>
                {
                    cart.map(cart=><Cart
                        key={cart.id}
                        cart={cart}
                        ></Cart>)
                }
            <div className='cart-button'>
            <button onClick={() => handleChooseNew(freeCart)} className='choose-new-button'>
                <p>Choose New</p>
            </button>
            <button onClick={() => handleChooseOneForMe(cart)} className='choose-1-for-me-button'>
                <p>Choose 1 For Me</p>
            </button>
            </div>
            </div>
            
        </div>
    );
};

export default Shop;