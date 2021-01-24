import React, { useState } from 'react'
import QuantityInput from './QuantityInput'


const CartItem = (props) => {
    const [quantity, setQuantity] = useState((props.item.quantity))

    const handleClick = () => {
        props.setItem(Object.assign({}, props.item, {quantity: quantity}))
    }

    return (
        <div>
            <button onClick={() => props.handleDelete(props.item)}>x</button>
            <h4>{props.item.name}</h4>
            <img src={props.item.img} alt='product' />
            <p>{`$${props.item.price}`}</p>
            <QuantityInput setParentNum={setQuantity} quantity={quantity} />
            <button onClick={handleClick}>Set</button>
        </div>
    )
}

export default CartItem;