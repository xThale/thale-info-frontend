import {combineReducers} from "redux"
import {authReducer} from "./auth";
import {deckReducer} from "./deck";


export const rootReducer = combineReducers({
    auth: authReducer,
    deck: deckReducer
});