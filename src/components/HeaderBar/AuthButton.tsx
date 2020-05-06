import React from "react";
import {ProfilePicture} from "../common/ProfilePicture";
import styled from "styled-components";
import config from "../../config/Config"
import {Button} from "../common/Button";

interface Props {
    loggedIn: boolean,
    userProfileImgSource: string | undefined,
    onClick: () => void
}

const AuthButton = styled(Button).attrs({
    inverted: true,
    bold: true
})`
    margin-left: auto;
    margin-right: 20px;
    
    height: 100%;
    padding: 0 20px;
    color: ${props => props.theme.headerBarTextColor}
    
    @media (max-width: ${config.media.large}px) {
        margin-right: 10px;
    }
`;

export const HeaderBarAuthButton : React.FC<Props> = (props) => {

    const ProfileImg = () => {
        if (props.userProfileImgSource) {
            return <ProfilePicture key={"img"} src={props.userProfileImgSource} size={20} marginRight={10}/>
        } else {
            return null
        }
    };

    return (
        <AuthButton onClick={props.onClick}>
            {props.loggedIn ? ([
                ProfileImg(),
                "Logout"
            ]) : (
                "Login"
            )}
        </AuthButton>
    )
};
