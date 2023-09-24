import { Card } from "./card";

export class Layer {
    layerCount: number;
    cards: Card[];

    constructor(layer: number, cards: Card[]) {
        this.layerCount = layer;
        this.cards = cards;
    }
}
