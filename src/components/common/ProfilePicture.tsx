import styled from "styled-components";

interface props {
    readonly src: string // Source of the image
    readonly size?: number // Size of the circular image
    readonly marginRight?: number // Margin on the right side
}

export const ProfilePicture = styled.img<props>`
    src: ${props => props.src};
    width: ${props => props.size || 20}px;
    height: ${props => props.size || 20}px;
    margin-right: ${props => props.marginRight || 0}px;
    alt: "";
    border-radius: 50%;
`;