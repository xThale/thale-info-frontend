import {AuthState, initAuthState} from "./auth";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {DeckState, initDeckState} from "./deck";

export interface AppState {
    auth: AuthState
    deck: DeckState
}

export function initState(): AppState {
    return {
        auth: initAuthState(),
        deck: initDeckState()
    }
}
// TODO: Use more redux
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;