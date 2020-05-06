import * as constants from "../constants/deck";
import {DeckState, initDeckState} from "../types/deck";
import {DeckAction} from "../actions/deck";

export function deckReducer(
    state: DeckState = initDeckState(),
    action: DeckAction
): DeckState {
    switch (action.type) {
        case constants.UPDATE_DECKS:
            return {...state, decks: action.decks};
        case constants.UPDATE_CARD:
            return {...state, decks: action.decks};
        default:
            return state
    }
}