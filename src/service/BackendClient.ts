import config from "../config/Config"
import {TokenExchangeResponse} from "../model/TokenExchangeResponse";
import {LoginMethod, LoginRequest} from "../model/request/LoginRequest";
import {ProblemError, ProblemResponse} from "../model/ProblemResponse";

const loginUrl = config.backend.backendServerUrl + config.backend.loginUrl;

interface Client {
    login(code: string, method: LoginMethod): Promise<TokenExchangeResponse | ProblemResponse>
}

export const BackendClient: Client = {

    async login(code: string, method: LoginMethod): Promise<TokenExchangeResponse> {

        const body : LoginRequest = {
            token: code,
            loginMethod: method
        };

        return fetch(loginUrl, {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(body)
        }).then(response => {
            return response.json()
        }).then(json => {
            if ('idToken' in json) {
                return json
            } else if ('status' in json) {
                throw new ProblemError(json)
            }
        })
    }

};
