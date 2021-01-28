import React from 'react'
import styled from 'styled-components'
import image from '../images/homepage.jpg'

const Heading = styled.h1`
    width: max-content;
    margin: 15px auto;
`

const Img = styled.img`
    width: 100%;
`

const UnderConstruction = (props) => {
    return (
        <div>
            <Heading>Under Construction</Heading>
            <Img src={image} alt='violin' />
        </div>
    )
}

export default UnderConstruction;