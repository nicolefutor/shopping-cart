import React from 'react';
import StyledLink from './StyledLink';
import image from '../images/homepage.jpg'
import styled from 'styled-components'

const Img = styled.img`
    display: block;
    height: 100vh;
    margin: 0 auto;
`

const Container = styled.div`
    overflow: hidden;
    text-align: center;
    width: 100%;
    position: absolute;
`

const CTA = styled(StyledLink)`
    background-color: white;
    padding: 15px 20px;
    border: 1px white solid;
    top: 50%;
    position: absolute;
`

const Home = (props) => {
    return (
        <Container>
            <Img src={image} alt='violin' />
            <CTA to='/shop'>Shop Now</CTA>
        </Container>
    )
}

export default Home;