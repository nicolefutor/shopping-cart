import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import QuantityInput from './QuantityInput';
import Link from './StyledLink';

const Button = styled.button`
    border-radius: 0;
    background-color: white;
    border: 2px solid black;
    font-size: 20px;
    padding: 5px 10px;
    margin: 10px 0;
    cursor: pointer;
`
const Container = styled.div`
    text-align: center;
    margin-right: 25px;
`

const Img = styled.img`
    height: 100%;
`

const ImgContainer = styled.div`
    width: 50%;
    float: left;
    display: inline;
    text-align: center;
`

const StyledLink = styled(Link)`
    font-size: 18px;
    margin: 10px;
    display: inline-block;
`

const ItemPage = (props) => {
    const {id} = useParams();
    const item = props.cartItems.find((x) => x.id === id) || props.shopItems.find((x) => x.id === id);

    const [quantity, setQuantity] = useState((item.quantity || 1))

    const handleClick = () => {
        props.setItem(Object.assign({}, item, {quantity: quantity}))
    }

    return (
        <div>
            <StyledLink to='/shop'>&#60;Go Back</StyledLink>
            <div>
                <ImgContainer>
                    <Img src={item.img} alt='product' />
                </ImgContainer>
                <Container>
                    <h1>{item.name}</h1>
                    <p>{`$${item.price}`}</p>
                    <QuantityInput setParentNum={setQuantity} quantity={quantity} />
                    <Button onClick={handleClick}>Add to Cart</Button>
                </Container>
            </div>
        </div>
    )
}

export default ItemPage;