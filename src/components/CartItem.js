import React, { useState } from 'react'
import styled from 'styled-components'
import QuantityInput from './QuantityInput'

const Img = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin: 15px;
`
const Container = styled.div`
    text-align: center;
    display: inline-block;
    border: 2px solid black;
    margin: 5px;
    width: 350px;
    height: 575px;
    vertical-align: middle;
`

const Button = styled.button`
    border-radius: 0;
    background-color: white;
    border: 2px solid black;
    font-size: 20px;
    padding: 5px 10px;
    margin: 10px 0;
    cursor: pointer;
`
const DeleteButton = styled(Button)`
    position: relative;
    left: 40%;
`

const Name = styled.h4`
    font-size: 1.25em;
    font-weight: 700;
    display: block;
    margin: 0 10px;
`

const StyledQuantityInput = styled(QuantityInput)`
    display: inline;
    margin-right: 10px;
`

const CartItem = (props) => {
    const [quantity, setQuantity] = useState((props.item.quantity))

    const handleClick = () => {
        props.setItem(Object.assign({}, props.item, {quantity: quantity}))
    }

    return (
        <Container>
            <DeleteButton onClick={() => props.handleDelete(props.item)}>x</DeleteButton>
            <Name>{props.item.name}</Name>
            <Img src={props.item.img} alt='product' />
            <p>{`$${props.item.price}`}</p>
            <StyledQuantityInput setParentNum={setQuantity} quantity={quantity} />
            <Button onClick={handleClick}>Set</Button>
        </Container>
    )
}

export default CartItem;