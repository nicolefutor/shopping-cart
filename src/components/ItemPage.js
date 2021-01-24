import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import QuantityInput from './QuantityInput';

const ItemPage = (props) => {
    const {id} = useParams();
    const item = props.cartItems.find((x) => x.id === id) || props.shopItems.find((x) => x.id === id);

    const [quantity, setQuantity] = useState((item.quantity || 1))

    const handleClick = () => {
        props.setItem(Object.assign({}, item, {quantity: quantity}))
    }

    return (
        <div>
            <Link to='/shop'>Go Back</Link>
            <h1>{item.name}</h1>
            <img src={item.img} alt='product' />
            <p>{`$${item.price}`}</p>
            <QuantityInput setParentNum={setQuantity} quantity={quantity} />
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default ItemPage;