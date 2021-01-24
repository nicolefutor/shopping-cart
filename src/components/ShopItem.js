import React from 'react'
import { Link } from 'react-router-dom'

const ShopItem = (props) => {
    
    
    return (
        <div>
            <img src={props.item.img} alt='product' />
            <Link to={`items/${props.item.id}`}>
                <h4>{props.item.name}</h4>
            </Link>
                <p>{`$${props.item.price}`}</p>
        </div>
    )
} 

export default ShopItem;