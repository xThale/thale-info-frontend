import styled from "styled-components";
import config from "../../config/Config";
import React from "react";

const FooterContainer = styled.div`
    text-align: center;
    color: ${props => props.theme.lighter}
`;


export const Footer: React.FC = () => {

    return (
        <FooterContainer>
            This website was created for educational purpose.
        </FooterContainer>
    )

}