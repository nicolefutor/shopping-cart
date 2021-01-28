import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid'
import CartItem from './CartItem';
import StyledLink from './StyledLink';

const Container = styled.div`
    text-align: center;
`

const Heading = styled.h1`
    text-align: center;
    width: max-content;
    margin: 10px auto;
`

const Paragraph = styled.p`
    font-size: 24px;
    margin: 10px;
`

const Cart = (props) => {
    const cartItems = props.items.map((item) => <CartItem key={uniqid()} item={item} handleDelete={(item) => props.deleteItem(item)} setItem={(item) => props.setItem(item)}/>)
    
    return (
        <div>
            <Container>
                <Heading>Cart</Heading>
                {cartItems}
            </Container>
            <Paragraph>Grand Total: {`$${props.items.map((x) => x.price*x.quantity).reduce((prev, curr) => prev+curr, 0)}`}</Paragraph>
            <Paragraph><StyledLink to='/under-construction'>Check Out</StyledLink></Paragraph>
        </div>
    )
}

export default Cart;