import React, {useState} from "react";
import styled from 'styled-components'
import {Button} from "./common/Button";
import {LoginWindow} from "./auth/LoginWindow";
import config from "../config/Config"
import Title from "./common/Title";
import {useSelector} from "../store/types/appState";
import {logout} from "../store/actions/auth";
import {useDispatch} from "react-redux";

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
    margin: 0px 20px;
    align-self: center;
`;

const LoginButtonDiv = styled.div`
    display: flex;
    margin-left: auto;
    height: 100%;
    justify-content: center;
    align-self: center;
    margin-right: 20px;
`;



export const NavBar: React.FC = () => {

    const [showLoginWindow, setShowLoginWindow] = useState(false);

    const dispatch = useDispatch();
    const logoutUserAction = () => dispatch(logout());
    const loggedIn = useSelector(state => state.auth.loggedIn);

    return(
        <Bar>
            <SiteTitle>Thale</SiteTitle>
            <LoginButtonDiv>

                {!loggedIn &&
                    <Button onClick={onLogin}>
                        Login
                    </Button>
                }

                {loggedIn &&
                    <Button onClick={onLogout}>
                        Logout
                    </Button>
                }

            </LoginButtonDiv>

            {showLoginWindow &&
                <LoginWindow handleClose={closeLoginWindow}/>
            }

        </Bar>
    );

    function onLogout() {
        logoutUserAction();
        window.location.reload()
    }

    function onLogin() {
        setShowLoginWindow(true)
    }

    function closeLoginWindow() {
        setShowLoginWindow(false)
    }

};

