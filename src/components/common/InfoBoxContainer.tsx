import React, {useState} from "react";
import styled from "styled-components";
import {InfoBox, InfoBoxContent} from "./InfoBox";
import {Button} from "./Button";

const Container = styled.div`
    display flex;
    flex-direction: column;
    margin-top: 20px;
    height: 300px;
    max-width: 1000px;
`

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
`

const StyledButton = styled(Button)`
    height: 30px;
    padding: 0;
    min-width: 50px;
    max-width: 151px;
    flex-grow: 1;
    
    border-top: 1px solid black;
    border-left: 1px solid black;
    
    :last-child {
        border-right: 1px solid black;
    }
`


interface props {
    content: InfoBoxContent[]
}
export const InfoBoxContainer: React.FC<props> = (props) => {

    const [index, setIndex] = useState(0);

    function onClick(index: number) {
        setIndex(index)
    }

    return (
        <Container>
            <ButtonRow>
                {
                    props.content.map((item, i) => (
                        <StyledButton key={i} onClick={event => onClick(i)} highlight>{item.title}</StyledButton>
                    ))
                }
            </ButtonRow>
            <InfoBox content={props.content} index={index}/>
        </Container>
    )
}