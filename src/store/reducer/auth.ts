import * as constants from '../constants/auth';
import {AuthAction} from "../actions/auth";
import {AuthState, initAuthState} from "../types/auth";


export function authReducer(
    state: AuthState = initAuthState(),
    action: AuthAction
): AuthState {
    switch (action.type) {
        case constants.INSERT_USER:
            return {...state, user: action.user, tokenData: action.token, loggedIn: true}
        case constants.LOGOUT_USER:
            return {...state, user: action.user, tokenData: action.token, loggedIn: false}
        default:
            return state
    }
}