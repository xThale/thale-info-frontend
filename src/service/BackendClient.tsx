import config from "../config/Config"
import {LoginResponse} from "../model/response/LoginResponse";
import {LoginMethod, LoginRequest} from "../model/request/LoginRequest";
import {ProblemError} from "../model/response/ProblemResponse";
import DeckResponse from "../model/response/DeckResponse";
import {Card} from "../model/Deck";
import {CardUpdateRequest} from "../model/request/CardUpdateRequest";

const loginUrl = config.backend.backendServerUrl + config.backend.loginUrl;
const deckUrl = config.backend.backendServerUrl + config.backend.deckUrl;

interface Client {
    login(code: string, method: LoginMethod): Promise<LoginResponse>
    getDecks(token: string): Promise<DeckResponse>
    patchCard(deckid: string, card: CardUpdateRequest, token?: string): Promise<string>
}

export const BackendClient: Client = {

    async login(code: string, method: LoginMethod): Promise<LoginResponse> {

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
            if ('token' in json && 'user' in json) {
                return json
            } else if ('status' in json) {
                throw new ProblemError(json)
            }
        })
    },

    async getDecks(token: string): Promise<DeckResponse> {

        return fetch(deckUrl,  {
            method: "get",
            headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${token}`}
        }).then(response => {
            return response.json()
        }).then(json => {
            if ('decks' in json) {
                return json
            } else if ('status' in json) {
                throw new ProblemError(json)
            }
        }).then(response => {
            (response as DeckResponse).decks.forEach(deck => {
                deck.cards.forEach((card, index) => {
                    card.index = index
                })
            });
            return response
        })
    },

    async patchCard(deckid: string, card: CardUpdateRequest, token?: string) : Promise<string> {

        return fetch(deckUrl + "/" + deckid + "/card/" + card.uuid, {
            method: "PATCH",
            headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify(card)
        }).then(response => {
            return noContentResponse(response)
        })
    }

};

function noContentResponse(response: Response) : Promise<string> {
    if (response.status !== 204) {
        const json = response.json();
        if ('status' in json) {
            throw new ProblemError(json)
        }
        return json
    }
    return new Promise<string>(resolve => "")
}
