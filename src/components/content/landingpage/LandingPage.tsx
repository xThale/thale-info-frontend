import * as React from "react";
import {MainTitle} from "./StyledComponents";
import styled from "styled-components";
import {Word} from "../../common/Word";

const Container = styled.div`
    display: flex
    flex-direction: column;
    padding: 20px;
    width: 100%;
    align-items: center;
`


export const LandingPage: React.FC = () => {

    return (
        <React.Fragment>
            <Container>
                <MainTitle>Improving one step at a time</MainTitle>
                <br />
                <Word>Welcome to my website.</Word>
            </Container>
        </React.Fragment>
    )

};

