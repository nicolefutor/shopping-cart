import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid'
import ShopItem from './ShopItem';

const Container = styled.div`
    text-align: center;
`
const Heading = styled.h1`
    text-align: center;
    width: max-content;
    margin: 10px auto;
`
const Shop = (props) => {
    const shopItems = props.items.map((item) => <ShopItem key={uniqid()} item={item}/>)
    return (
        <Container>
            <Heading>Shop</Heading>
            {shopItems}
        </Container>
    )
}

export default Shop;