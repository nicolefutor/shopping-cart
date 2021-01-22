import React from 'react'
import { Link } from 'react-router-dom'

const ShopItem = (props) => {
    return (
        <div>
            <Link to={`items/${props.item.id}`}>
                <h2>{props.item.name}</h2>
            </Link>
        </div>
    )
} 

export default ShopItem;