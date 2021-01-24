import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid'
import CartItem from './CartItem';

const Cart = (props) => {
    const cartItems = props.items.map((item) => <CartItem key={uniqid()} item={item} handleDelete={(item) => props.deleteItem(item)} setItem={(item) => props.setItem(item)}/>)
    
    return (
        <div>
            <h1>Cart</h1>
            {cartItems}
            <p>Grand Total: {`$${props.items.map((x) => x.price).reduce((prev, curr) => prev+curr, 0)}`}</p>
            <Link to='/under-construction'>Check Out</Link>
        </div>
    )
}

export default Cart;