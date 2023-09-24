export interface Card {
    layer: number;
    cardId: number;
    cardTitle: string;
    parentCard: boolean;
    childCard: boolean;
    siblingCard: boolean;
}
