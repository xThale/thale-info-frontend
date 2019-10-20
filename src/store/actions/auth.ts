import {Action} from "redux";
import * as constants from "../constants/auth";
import {User} from "../../model/User";

export interface InsertUser extends Action {
    type: constants.INSERT_USER
    user: User
}

export type AuthAction = InsertUser

export function insertUser(user: User): AuthAction {
    return {
        type: constants.INSERT_USER,
        user: user
    }
}