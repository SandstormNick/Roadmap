export class Card {
    layer: number;
    cardId: number;
    cardTitle: string;
    parentCard: number;
    siblingCard?: number; //Sibling cards cannot have Parent/Children cards (for now at least)
    hasChildren: boolean;

    constructor(layer: number, cardId: number, title: string, parent: number, sibling: number, children: boolean) {
        this.layer = layer;
        this.cardId = cardId;
        this.cardTitle = title;
        this.parentCard = parent;
        this.siblingCard = sibling;
        this.hasChildren = children;
    }
}
