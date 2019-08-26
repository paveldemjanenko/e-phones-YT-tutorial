import React from 'react';
import CartItem from './CartItem';

const CartList = ({value}) => {
    const {cart} = value;

    return (
        <div className='constainer-fluid'>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} /> // items pases used items (photo, price...),value passing actual methods
            })}
        </div>
    );
};

export default CartList;