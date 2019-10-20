import * as constants from '../constants/auth';
import {InsertUser} from "../actions/auth";
import {AuthState, initAuthState} from "../types/auth";


export function authReducer(
    state: AuthState = initAuthState(),
    action: InsertUser
): AuthState {
    switch (action.type) {
        case constants.INSERT_USER:
            return {...state, currentUser: action.user}
    }
    return state
}