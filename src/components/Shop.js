import React from 'react';
import uniqid from 'uniqid'
import ShopItem from './ShopItem';

const Shop = (props) => {
    const shopItems = props.items.map((item) => <ShopItem key={uniqid()} item={item} />)
    return (
        <div>
            <h1>Shop</h1>
            <div>
                {shopItems}
            </div>
        </div>
    )
}

export default Shop;