import React, {useState} from "react";
import styled from 'styled-components'
import {LoginWindow} from "../auth/LoginWindow";
import config from "../../config/Config"
import {Title} from "../common/Title";
import {useSelector} from "../../store/types/appState";
import {logout} from "../../store/actions/auth";
import {useDispatch} from "react-redux";
import {HeaderBarAuthenticationButton} from "./HeaderBarAuthenticationButton";
import {useHistory} from "react-router";

const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    
    position: relative;
    z-index: 10;
    
    width: 100%;
    height: 100%
    
    background: ${config.theme.dark};
    
    -moz-box-shadow:    1px 1px 1px 0px ${config.theme.lighter};
    -webkit-box-shadow: 1px 1px 1px 0px ${config.theme.lighter};
    box-shadow:         1px 1px 1px 0px ${config.theme.lighter};
    
`;

const NavBarSiteTitle = styled(Title)`
    display: flex;
    align-items: center;
    align-self: flex-start;
    cursor: pointer;
    color: ${props => props.theme.navBarTextColor}
    height: 100%;
    margin: 0px 20px;
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

    function gotoHome() {
        history.push("/")
    }

    return(
        <StyledNavBar>

            {
                // The title of this page
                <NavBarSiteTitle onClick={gotoHome}>Thale</NavBarSiteTitle>
            }

            {
                // The Login / Logout Button
                <HeaderBarAuthenticationButton
                    loggedIn={loggedIn}
                    userProfileImgSource={userProfilePic}
                    onClick={onAuthClick}
                />

            }

            {showLoginWindow &&
            <LoginWindow handleClose={closeLoginWindow}/>
            }

        </StyledNavBar>
    );

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

