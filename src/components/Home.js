import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/homepage.jpg'

const Home = (props) => {
    return (
        <div>
            <img src={image} alt='violin' />
            <Link to='/shop'>Shop Now</Link>
        </div>
    )
}

export default Home;