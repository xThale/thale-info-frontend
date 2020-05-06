import {Deck} from "../../model/Deck";

export interface DeckState {
    decks: Deck[]
}

export function initDeckState(): DeckState {
    return {
        decks: []
    }
}