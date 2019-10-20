import {AppState} from "../store/types/appState";

/**
 * Returns an instance of the local storage
 */
function getLocalStorage(): Storage {
    return localStorage
}

/**
 * Saves the given state in the local storage
 */
export function saveState(state: AppState): void {
    try {
        const persistedState = JSON.stringify(state)
        getLocalStorage().setItem('state', persistedState)
    } catch (e) {
        console.error("failed to save state: ", e)
    }
}

/**
 * Loads and returns the state from the local storage
 *
 * @returns persisted state or null
 */
export function loadState(): AppState | null {
    let state: AppState | null = null

    try {
        const persistedState = getLocalStorage().getItem('state')

        if (persistedState) {
            state = JSON.parse(persistedState) as AppState
        }

    } catch(e) {
        console.error("failed to load the state from the local storage:", e)
    }

    return state
}