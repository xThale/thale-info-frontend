import React, {useState} from "react";
import styled from "styled-components";
import GoogleLoginButton from "./GoogleLoginButton";
import Title from "../common/Title";
import LoginOverlay from "../common/WindowOverlay";
import {GoogleLoginResponseOffline} from "react-google-login";
import {useDispatch} from "react-redux";
import {User} from "../../model/User";
import {insertUser} from "../../store/actions/auth";
import {BackendClient} from "../../service/BackendClient";
import {LoginMethod} from "../../model/request/LoginRequest";
import {ProblemError} from "../../model/ProblemResponse";

const Window = styled.div`
    display: flex;
    justify-content: space-around;
    
    background: white;
    width: 400px;
    height: 160px;
    
    -moz-box-shadow:    inset 0 0 1px #000000;
    -webkit-box-shadow: inset 0 0 1px #000000;
    box-shadow:         inset 0 0 1px #000000;
`;

const Heading = styled(Title)`
    text-align: center;
    
    margin: 0px;
    padding: 10px;
    
    color: #650E77;
    letter-spacing: 1px;
    border-bottom: 1px solid;
    margin-bottom: 30px;
`;

interface Props {
    handleClose: (event: any | undefined) => void
}

export const LoginWindow: React.FC<Props> = (props) => {

    const dispatch = useDispatch();
    const insertUserAction = (user: User) => dispatch(insertUser(user));

    const [disableClick, setDisableClick] = useState(false);

    function onMouseEnter() {
        setDisableClick(true)
    }

    function onMouseLeave() {
        setDisableClick(false)
    }

    function close(event: any) {
        if (!disableClick) {
            props.handleClose(event)
        }
    }

    function onLoginCode(code: GoogleLoginResponseOffline) {
        BackendClient.login(code.code, LoginMethod.GOOGLE).then(token => {
            console.log(token)
            //TODO: Get user from token
        }).catch(error => {
            if(error instanceof ProblemError) {
                console.error(error.status)
            } else {
                // TODO: Catch errors like network issues
            }

        })
    }

    function onError(error: any) {
        console.error(error)
    }

    return(
        <LoginOverlay onClick={close}>
            <Window onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div>
                    <Heading>
                        Login
                    </Heading>
                    <GoogleLoginButton onLogin={onLoginCode} onError={onError}/>
                </div>
                <div>
                    <Heading>
                        Register
                    </Heading>
                </div>
            </Window>
        </LoginOverlay>
    )

};