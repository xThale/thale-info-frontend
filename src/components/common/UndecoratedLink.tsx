import styled from "styled-components";
import {Link} from "react-router-dom";


export const UndecoratedLink = styled(Link)`
    text-decoration: none;
    outline: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        outline: none;
    }
`;