import React from 'react'
import { useParams } from 'react-router-dom';

const ItemPage = (props) => {
    const {id} = useParams();
    const item = props.items.find((x) => x.id === id);

    return (
        <h1>{item.name}</h1>
    )
}

export default ItemPage;