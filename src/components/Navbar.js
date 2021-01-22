import React from 'react';
import {
    Link
  } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import {GiViolin} from 'react-icons/gi'

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li key={1}><GiViolin /></li>
                <li key={2}><Link to='/'>Home</Link></li>
                <li key={3}><Link to='/shop'>Shop</Link></li>
                <li key={4}><p>{props.numItems}</p></li>
                <li key={5}><Link to='/cart'><FaShoppingCart /></Link></li>

            </ul>
        </nav>
    )
}

export default Navbar;