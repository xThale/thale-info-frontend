import React from "react"
import {useHistory} from "react-router";
import styled from "styled-components";
import {Button} from "../common/Button";

export const HeaderBarButton = styled(Button).attrs({
    bold: true
})`
    height: 100%;
    padding: 0 20px;
    color: ${props => props.theme.headerBarTextColor}
`;


export const Navigation = () => {

    const history = useHistory();

    return (

        <React.Fragment>

            <HeaderBarButton onClick={() => goto("/")}>
                Home
            </HeaderBarButton>

            <HeaderBarButton onClick={() => goto("/deck")}>
                Decks
            </HeaderBarButton>

        </React.Fragment>

    )

    function goto(location: string) {
        history.push(location)
    }

}