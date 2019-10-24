import React from "react";
import styled from "styled-components";
import notFound from "../../resources/images/not-found.gif"
import {Title} from "../common/Title";
import {useHistory} from "react-router";
import {Button} from "../common/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding:0;
    margin:0;
    
    align-items: center;
    justify-content: center;
    
    background: white;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Image = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid;
    cursor: pointer;
`;

export const NotFound: React.FC = () => {

    const history = useHistory();

    /**
     * Go back since the user should not be here
     */
    function goBack() {
        history.goBack()
    }

    return (
        <Container>
            <Image src={notFound} onClick={goBack}/>
            <Title margin={30}>Page Was Not Found :(</Title>
            <Button onClick={goBack}>
                Go Back
            </Button>
        </Container>

    )

}