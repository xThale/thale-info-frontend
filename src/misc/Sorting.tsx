import {Card} from "../model/Deck";

export function compare( a : Card, b : Card ) {
    if ( a.index < b.index ){
        return -1;
    }
    if ( a.index > b.index ){
        return 1;
    }
    return 0;
}