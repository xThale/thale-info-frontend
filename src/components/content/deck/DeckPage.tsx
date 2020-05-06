import React, {useEffect} from 'react';
import {useSelector} from "../../../store/types/appState";
import styled from "styled-components";
import {Deck} from "../../../model/Deck";
import {DeckContainer} from "./DeckContainer";
import config from '../../../config/Config'
import {BackendClient} from "../../../service/BackendClient";
import {useDispatch} from "react-redux";
import {updateDecks} from "../../../store/actions/deck";

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

export const DeckPage: React.FC = () => {

    const auth = useSelector(state => state.auth);
    const decks = useSelector(state => state.deck.decks);
    const dispatch = useDispatch();
    const dispatchDecks = (decks: Deck[]) => dispatch(updateDecks(decks));

    function loadDecks() {
        if (auth.tokenData !== undefined) {
            BackendClient.getDecks(auth.tokenData.idToken).then(response => {
                dispatchDecks(response.decks)
            }).catch(error => {
                console.log("Exception while fetching decks: " + error)
            })
        }
    }

    useEffect(() => {
        loadDecks()
    });

    return (
        <Container>
            {decks.map(deck => {
                if (deck != null) {
                    return <DeckContainer key={deck.uuid} deck={deck}/>
                } else {
                    return undefined
                }
            })}
        </Container>
    )

}