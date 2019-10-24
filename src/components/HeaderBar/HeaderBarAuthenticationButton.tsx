import React from "react";
import {HeaderBarButton} from "./HeaderBarButton";
import {ProfilePicture} from "../common/ProfilePicture";
import styled from "styled-components";
import config from "../../config/Config"

interface Props {
    loggedIn: boolean,
    userProfileImgSource: string | undefined,
    onClick: () => void
}

const Button = styled(HeaderBarButton)`
    margin-left: auto;
    margin-right: 20px;
    
    @media (max-width: ${config.media.large}px) {
        margin-right: 10px;
    }
`

export const HeaderBarAuthenticationButton : React.FC<Props> = (props) => {

    const ProfileImg = () => {
        if (props.userProfileImgSource) {
            return <ProfilePicture key={"img"} src={props.userProfileImgSource} size={20} marginRight={10}/>
        } else {
            return null
        }
    };

    return (
        <Button onClick={props.onClick}>
            {props.loggedIn ? ([
                ProfileImg(),
                "Logout"
            ]) : (
                "Login"
            )}
        </Button>
    )
};
