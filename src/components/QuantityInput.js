import React, { useState } from 'react'

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
        <div>
            <button onClick={handleDecrement}>-</button>
            <input type='number' value={num} onChange={handleChange} />
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default QuantityInput;