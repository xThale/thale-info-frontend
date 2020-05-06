
export interface Deck {
    uuid: string
    owner: string
    name: string
    cards: Card[]
}

export interface Card {
    uuid: string
    index: number
    front: string
    back: string
    leech: boolean
}