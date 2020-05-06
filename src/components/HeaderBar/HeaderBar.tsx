import React, {useState} from "react";
import styled from 'styled-components'
import {LoginWindow} from "../auth/LoginWindow";
import config from "../../config/Config"
import {Title} from "../common/Title";
import {useSelector} from "../../store/types/appState";
import {logout} from "../../store/actions/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {Navigation} from "./Navigation";
import {HeaderBarAuthButton} from "./AuthButton";

const HeaderBarContainer = styled.div`
    display: flex;
    z-index: 10;
    height: 100%;
    
    align-items: center;
    
    background: ${config.theme.dark};
    -moz-box-shadow:    1px 1px 1px 0px ${config.theme.lighter};
    -webkit-box-shadow: 1px 1px 1px 0px ${config.theme.lighter};
    box-shadow:         1px 1px 1px 0px ${config.theme.lighter};
`;

const SiteTitle = styled(Title)`
    margin: 0px 40px 0px 20px;
    cursor: pointer;
    color: ${props => props.theme.headerBarTextColor}
`;

export const HeaderBar: React.FC = () => {

    // Component State
    const [showLoginWindow, setShowLoginWindow] = useState(false);

    // Change App State
    const dispatch = useDispatch();
    const logoutUserAction = () => dispatch(logout());

    // Get App State
    const auth = useSelector(state => state.auth);
    const loggedIn = auth.loggedIn;
    const userProfilePic = auth.user && auth.user.avatar;

    const history = useHistory();

    return(
        <HeaderBarContainer>

            {
                // The title of this page
                <SiteTitle onClick={gotoHome}>Thale</SiteTitle>
            }

            {
                <Navigation />
            }

            {
                // The Login / Logout Button
                <HeaderBarAuthButton
                    loggedIn={loggedIn}
                    userProfileImgSource={userProfilePic}
                    onClick={onAuthClick}
                />

            }

            {showLoginWindow &&
                <LoginWindow handleClose={closeLoginWindow}/>
            }

        </HeaderBarContainer>
    );

    function gotoHome() {
        history.push("/")
    }

    function onAuthClick() {
        if (loggedIn) {
            logoutUserAction();
            window.location.reload()
        } else {
            setShowLoginWindow(true)
        }
    }

    function closeLoginWindow() {
        setShowLoginWindow(false)
    }

};

