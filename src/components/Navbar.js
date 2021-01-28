import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import {GiViolin} from 'react-icons/gi'
import styled from 'styled-components'
import Link from './StyledLink'

const List = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 5px;
    margin: 0;
    float: right;
    position: relative;
    bottom: 57px;
`

const Nav = styled.nav`
    background-color: teal;
    margin: 0;

`

const StyledLink = styled(Link)`
    color: white;
    &:hover {
        border-bottom-color: white;
    }
`

const ListItem = styled.li`
    color: white;
    font-size: 20px;
    padding-right: 5px;
    padding-left: 5px;
`

const Logo = styled(ListItem)`
    font-size: 64px;
    list-style-type: none;
    padding: 5px;
` 

const Navbar = (props) => {
    return (
        <Nav>
            <Logo key={1}><GiViolin /></Logo>
            <List>
                <ListItem key={2}><StyledLink to='/'>Home</StyledLink></ListItem>
                <ListItem key={3}><StyledLink to='/shop'>Shop</StyledLink></ListItem>
                <ListItem key={4}>{props.numItems}<StyledLink to='/cart'><FaShoppingCart /></StyledLink></ListItem>
            </List>
        </Nav>
    )
}

export default Navbar;