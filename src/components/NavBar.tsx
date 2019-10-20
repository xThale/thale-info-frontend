import React, {useState} from "react";
import styled from 'styled-components'
import {Button} from "./common/Button";
import {LoginWindow} from "./auth/LoginWindow";
import config from "../config/Config"
import Title from "./common/Title";

const Bar = styled.div`
    display: flex;
    width: 100%; height: 35px;
    background: ${config.theme.dark};
    
    -moz-box-shadow:    1px 1px 1px 0px #ccc;
    -webkit-box-shadow: 1px 1px 1px 0px #ccc;
    box-shadow:         1px 1px 1px 0px #ccc;
`;

const SiteTitle = styled(Title)`
    align-self: flex-start
    height: 80%;
    padding: 0px 10px;
    align-self: center;
`;

const LoginButtonDiv = styled.div`
    display: flex;
    margin-left: auto;
    height: 100%;
    justify-content: center;
    align-self: center;
`;



export const NavBar: React.FC = () => {

    const [showLoginWindow, setShowLoginWindow] = useState(false);

    return(
        <Bar>
            <SiteTitle>Thale</SiteTitle>
            <LoginButtonDiv>
                <Button onClick={onLogin}>
                    Login
                </Button>
            </LoginButtonDiv>

            {showLoginWindow &&
                <LoginWindow handleClose={closeLoginWindow}/>
            }

        </Bar>
    );

    function onLogin() {
        setShowLoginWindow(true)
    }

    function closeLoginWindow() {
        setShowLoginWindow(false)
    }

};

