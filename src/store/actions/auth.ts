import {Action} from "redux";
import * as constants from "../constants/auth";
import {User} from "../../model/User";
import {TokenInfo} from "../../model/TokenInfo";

export interface InsertUser extends Action {
    type: constants.INSERT_USER
    user: User
    token: TokenInfo
}

export interface LogoutUser extends Action {
    type: constants.LOGOUT_USER
    user: null
    token: null
}

export type AuthAction = InsertUser | LogoutUser

export function insertUser(user: User, token: TokenInfo): AuthAction {
    return {
        type: constants.INSERT_USER,
        user: user,
        token: token
    }
}

export function logout(): AuthAction {
    return {
        type: constants.LOGOUT_USER,
        user: null,
        token: null
    }
}