import {User} from "../User";
import {TokenInfo} from "../TokenInfo";

export interface LoginResponse {
    token: TokenInfo
    user: User
}