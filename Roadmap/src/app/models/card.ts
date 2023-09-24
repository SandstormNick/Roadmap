export class Card {
    layer: number;
    cardId: number;
    cardTitle: string;
    parentCard: number;
    siblingCard?: number;

    constructor(layer: number, cardId: number, title: string, parent: number, sibling: number) {
        this.layer = layer;
        this.cardId = cardId;
        this.cardTitle = title;
        this.parentCard = parent;
        this.siblingCard = sibling;
    }
}
