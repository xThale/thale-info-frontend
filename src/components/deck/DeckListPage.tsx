import React from 'react';
import {useSelector} from "../../store/types/appState";
import styled from "styled-components";
import {Deck} from "../../model/Deck";
import {DeckContainer} from "./DeckContainer";
import config from '../../config/Config'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
    @media (max-width: ${config.media.xsmall}px) {
        position: relative;
        flex-wrap: nowrap;
    
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const decks : Deck[] = [{
    id: "765858",
    name: "TestTitel",
    cards: [{
        front: "front",
        back: "back",
        leech: false
    }]
},{
    id: "765859",
    name: "TestTitel",
    cards: [{
        front: "front",
        back: "back",
        leech: false
    }]
},{
    id: "765838",
    name: "TestTitel",
    cards: [{
        front: "front",
        back: "back",
        leech: false
    }]
},{
    id: "12858",
    name: "TestTitel",
    cards: [{
        front: "front",
        back: "back",
        leech: false
    }]
},{
    id: "723858",
    name: "TestTitel",
    cards: [{
        front: "front",
        back: "back",
        leech: false
    }]
}]

export const DeckListPage: React.FC = () => {

    const user = useSelector(state => state.auth.user);

    return (
        <Container>
            {decks.map(deck => <DeckContainer key={deck.id} deck={deck}/>)}
        </Container>

    )

}