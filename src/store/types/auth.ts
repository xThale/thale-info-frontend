import {User} from "../../model/User";
import {TokenInfo} from "../../model/TokenInfo";


export interface AuthState {
    user?: User
    tokenData?: TokenInfo
    loggedIn: boolean
}

export function initAuthState(): AuthState {
    return {
        user: undefined,
        tokenData: undefined,
        loggedIn: false
    }
}