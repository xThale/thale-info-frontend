import React, {useState} from "react";
import styled from "styled-components";
import GoogleLoginButton from "./GoogleLoginButton";
import {GoogleLoginResponseOffline} from "react-google-login";
import {useDispatch} from "react-redux";
import {User} from "../../model/User";
import {insertUser, logout} from "../../store/actions/auth";
import {BackendClient} from "../../service/BackendClient";
import {LoginMethod} from "../../model/request/LoginRequest";
import {ProblemError} from "../../model/response/ProblemResponse";
import {TokenInfo} from "../../model/TokenInfo";
import {Title} from "../common/Title";
import {BlackPageOverlay} from "../common/BlackPageOverlay"
import {Text} from "../common/Text";

const Window = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 400px;
    -moz-box-shadow:    inset 0 0 1px #000000;
    -webkit-box-shadow: inset 0 0 1px #000000;
    box-shadow:         inset 0 0 1px #000000;
`;

const ErrorMessage = styled(Text)`
    color: red;
    text-align: center;
    margin: 10px 20px 20px 20px;
`;

const OptionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const Heading = styled(Title)`
    text-align: center;
    padding: 10px;
    letter-spacing: 1px;
    border-bottom: 1px solid;
    margin-bottom: 30px;
`;

interface Props {
    handleClose: (event: any | undefined) => void
}

export const LoginWindow: React.FC<Props> = (props) => {

    const dispatch = useDispatch();
    const insertUserAction = (user: User, token: TokenInfo) => dispatch(insertUser(user, token));
    const logoutUserAction = () => dispatch(logout());

    const [disableClick, setDisableClick] = useState(false);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

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
            setErrorMessage(null);
            insertUserAction(token.user, token.token)
            props.handleClose(undefined)
        }).catch(error => {
            logoutUserAction();
            if(error instanceof ProblemError) {
                setErrorMessage("Error: " + error.details)
            } else {
                setErrorMessage("Unexpected error occurred: " + error.message)
            }
        })
    }

    function onError() {
        setErrorMessage("You could not be logged in")
    }

    return(
        // TODO: Add Logout and error
        <BlackPageOverlay onClick={close}>
            <Window onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <OptionContainer>
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
                </OptionContainer>

                {errorMessage &&
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                }

            </Window>
        </BlackPageOverlay>
    )

};