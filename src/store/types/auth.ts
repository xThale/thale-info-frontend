import {User} from "../../model/User";


export interface AuthState {
    currentUser: User | null
}

export function initAuthState(): AuthState {
    return {
        currentUser: null
    }
}