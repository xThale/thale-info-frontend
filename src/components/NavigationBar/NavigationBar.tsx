import React from "react";
import styled from "styled-components";
import {Button} from "../common/Button";
import {useHistory} from "react-router-dom";
import config from '../../config/Config'
import {Footer} from "../footer/Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    flex: 1;

    -moz-box-shadow:    3px 0px 3px -1px ${props => props.theme.lighter};
    -webkit-box-shadow: 3px 0px 3px -1px ${props => props.theme.lighter};
    box-shadow:         3px 0px 3px -1px ${props => props.theme.lighter};
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    width: auto;
    
    @media (max-width: ${config.media.xsmall}px) {
        margin 0;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    width: auto;
    
    @media (max-width: ${config.media.xsmall}px) {
        display: none;
    }
`;


const Item = styled(Button)`
    border-top: 1px solid white;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: auto;
    margin-bottom: 20px;
    
    @media (max-width: ${config.media.xsmall}px) {
        display: none;
    }
`

export const NavigationBar: React.FC = () => {

    const gitHubLink = "https://github.com/xThale"; // TODO: Config
    const xingLink = "https://www.xing.com/profile/Simon_Thalmaier/cv"

    const history = useHistory();

    function redirect(location: string) {
        history.push(location)
    }

    function openWindow(location: string) {
        window.open(location, '_blank');
    }

    return (
        <Container>
            <NavContainer>
                <Item highlight onClick={event => redirect("/")}>
                    Home
                </Item>
                <Item highlight onClick={event => redirect("/decks")}>
                    Decks
                </Item>
            </NavContainer>

            <SocialContainer>
                <Item highlight onClick={event => openWindow(gitHubLink)}>
                    Github
                </Item>
                <Item highlight onClick={event => openWindow(xingLink)}>
                    Xing
                </Item>
            </SocialContainer>

            <FooterContainer>
                <Footer />
            </FooterContainer>
        </Container>
    )
}