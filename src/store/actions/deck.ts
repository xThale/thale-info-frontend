import {Card, Deck} from "../../model/Deck";
import {Action} from "redux";
import * as constants from "../constants/deck";
import {UPDATE_DECKS} from "../constants/deck";
import DOMPurify from 'dompurify';
import {compare} from "../../misc/Sorting";

export interface UpdateDecks extends Action {
    type: constants.UPDATE_DECKS
    decks: Deck[]
}

export interface UpdateCard extends Action {
    type: constants.UPDATE_CARD
    decks: Deck[]
}

export type DeckAction = UpdateDecks | UpdateCard

export function updateDecks(decks: Deck[]) {

    decks = decks.map(deck => {
        deck.cards = deck.cards.map(card => {
            card.front = purify(card.front);
            card.back = purify(card.back);
            return card
        }).sort(compare);
        return deck
    });

    return {
        type: UPDATE_DECKS,
        decks: decks
    }
}

export function updateCard(decks: Deck[], deckId: string, card: Card) {

    const newDecks = decks.map(d => {

        if (d.uuid === deckId) {
            d.cards = d.cards.map(c => {
                if (c.uuid === card.uuid) {
                    c = card
                }
                return c
            }).sort(compare)
        }

        return d
    })

    return {
        type: UPDATE_DECKS,
        decks: newDecks
    }
}

//TODO: move to service
function purify(html: string) : string {
    return DOMPurify.sanitize(html)
}