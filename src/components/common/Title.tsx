import styled from "styled-components";

interface props {
    color?: string
    margin?: number
}

/**
 * A title used everywhere a title is needed
 */
export const Title = styled.h2<props>`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.color || props.theme.title};
    margin: ${props => props.margin || 0}px;
    letter-spacing: 1px;
`;