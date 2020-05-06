import styled from "styled-components";


interface props {
    color?: string
}

/**
 * A title used everywhere a title is needed
 */
export const Word = styled.a`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.color || props.theme.text};
    
    b {
        color: ${props => props.theme.lighter}
    }
`;