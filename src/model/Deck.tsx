
export interface Deck {
    id: string
    name: string
    cards: Card[]
}

export interface Card {
    front: string
    back: string
    leech: boolean
}