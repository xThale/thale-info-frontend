import {User} from "../../model/User";
import {TokenInfo} from "../../model/TokenInfo";


export interface AuthState {
    user: User | null
    tokenData: TokenInfo | null
    loggedIn: boolean
}

export function initAuthState(): AuthState {
    return {
        user: null,
        tokenData: null,
        loggedIn: false
    }
}