import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    border: 1px solid transparent;
    text-decoration: none;
    color: black;
    &:hover {
        border-bottom-color: black;
    }
`

export default StyledLink;