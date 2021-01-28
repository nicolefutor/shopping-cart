import React from 'react'
import styled from 'styled-components';
import StyledLink from './StyledLink';

const Img = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin: 15px;
`

const Name = styled(StyledLink)`
    font-size: 1.25em;
    font-weight: 700;
    display: block;
    margin: 0 10px;
`

const Container = styled.div`
    text-align: center;
    display: inline-block;
    border: 2px solid black;
    margin: 5px;
    width: 350px;
    height: 425px;
    vertical-align: middle;
`

const ShopItem = (props) => {
    
    return (
        <Container>
            <Img src={props.item.img} alt='product' />
            <Name to={`items/${props.item.id}`}>{props.item.name}</Name>
            <p>{`$${props.item.price}`}</p>
        </Container>
    )
} 

export default ShopItem;