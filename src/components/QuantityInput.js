import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border-radius: 0;
    background-color: white;
    border: 2px solid black;
    cursor: pointer;
`

const Input = styled.input`
    border-radius: 0;
    text-align: center;
    border: 2px solid black;
    border-right-width: 1px;
    border-left-width: 1px;
    width: 75px;
`

const Container = styled.div`
    display: inline;
    margin-right: 10px;
`

const QuantityInput = (props) => {
    const [num, setNum] = useState(props.quantity)
    
    const handleIncrement = () => {
        props.setParentNum(num + 1);
        setNum(num + 1)
    }

    const handleDecrement = () => {
        props.setParentNum(num - 1);
        setNum(num - 1)
    }

    const handleChange = (e) => {
        props.setParentNum(e.target.value);
        setNum(e.target.value)
    }

    return (
        <Container>
            <Button onClick={handleDecrement}>-</Button>
            <Input type='number' value={num} onChange={handleChange} />
            <Button onClick={handleIncrement}>+</Button>
        </Container>
    )
}

export default QuantityInput;