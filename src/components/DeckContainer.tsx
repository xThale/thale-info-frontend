import React from 'react';
import styled from "styled-components";
import {Deck} from "../model/Deck";
import Title from "./common/Title";
import {Button} from "./common/Button";
import config from "../config/Config";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 220px;
    height: 350px;
    -moz-box-shadow:    inset 0 0 1px #000000;
    -webkit-box-shadow: inset 0 0 1px #000000;
    box-shadow:         inset 0 0 1px #000000;
`

// TODO: Color
const Heading = styled(Title)`
    text-align: center;
    margin: 0px;
    color: ${config.theme.dark};
    margin-bottom: 10px;
`;

const LearnButton = styled(Button)`
    height: 10%;
    border: solid 1px black;
`

interface props {
    deck: Deck
}

export const DeckContainer : React.FC<props> = (props) => {

    return (
        <Container>
            <Heading>
                {props.deck.name}
            </Heading>
            Cards contained: {props.deck.cards.length}
            <LearnButton invertedButton={true}>
                Learn
            </LearnButton>
        </Container>
    )

}