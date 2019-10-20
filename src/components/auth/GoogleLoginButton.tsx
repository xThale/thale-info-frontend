import React from "react";
import GoogleLogin, {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {Button} from "../common/Button";
import styled from "styled-components";
import GoogleIcon from "../../resources/images/google-icon.png"
import config from "../../config/Config"

const SpecializedButton = styled(Button)`
    width: 100%;
    padding: 10px;
    font-size: 20px;
    border: 1px solid;
`;

const GoogleIconContainer = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 5px;
    vertical-align:middle;
`;

const ButtonComponent = (props : any) => {
    return(
        <SpecializedButton onClick={props.onClick} disabled={props.disabled}>
            <GoogleIconContainer src={GoogleIcon}/>
            Google
        </SpecializedButton>
    )
};

interface Props {
    onLogin: (response: GoogleLoginResponseOffline) => void
    onError: (error: any) => void
}

const GoogleLoginButton: React.FC<Props> = (props) => {

    return (
        <GoogleLogin
            clientId={config.auth.googleClientId}
            buttonText={"GoogleLoginButton"}
            render={props => (
                ButtonComponent(props)
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            accessType={'offline'}
            responseType={'code'}
            prompt={'consent'}
        />
    );

    function onSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
        if ('code' in response){
            props.onLogin(response)
        } else {
            // TODO: Handle error
            console.error("Unsupported response type for login");
            console.log(response);
        }
    }

    function onFailure(response: any) {
        props.onError(response)
    }

};

export default GoogleLoginButton;