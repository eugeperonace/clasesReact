import React from 'react';
import shopping_cart from '../../assets/images/shopping-cart.png'
import './styles.css'

const CartWidget = () => {
    return(
        <button className='cart-btn'>
            <img src={shopping_cart} alt="Cart Icon" className='cart-widget' />
        </button>
    );
};

export default CartWidget;
