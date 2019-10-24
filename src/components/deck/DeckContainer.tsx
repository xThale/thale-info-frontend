import React from 'react';
import styled from "styled-components";
import {Deck} from "../../model/Deck";
import {Title} from "../common/Title";
import {Text} from "../common/Text";
import { useHistory } from 'react-router';

const Container = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    padding: 20px;
    width: 220px;
    height: 350px;
    border: 1px solid;
    margin: 20px;
    cursor: pointer;
    -moz-box-shadow:    inset 0 0 3px #000000;
    -webkit-box-shadow: inset 0 0 3px #000000;
    box-shadow:         inset 0 0 3px #000000;
`;

const Heading = styled(Title)`
    text-align: center;
    word-wrap: break-word;
    height: 30%
    margin: 0px;
    margin-bottom: 40px;
`;


interface props {
    deck: Deck
}

export const DeckContainer : React.FC<props> = (props) => {

    const history = useHistory();

    function redirect() {
        history.push(`/deck/${props.deck.id}`)
    }

    return (
        <Container onClick={redirect}>
            <Heading>
                {props.deck.name}
            </Heading>
            <Text>Cards contained: {props.deck.cards.length}</Text>
        </Container>
    )

}