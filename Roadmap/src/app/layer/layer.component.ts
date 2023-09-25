import { Component, Input, OnInit } from '@angular/core';

import { Layer } from '../models/layer';
import { Card } from '../models/card';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit{
  layerTitle: string = "Layer";
  @Input() layerCount: number;
  @Input() layer: Layer;

  ngOnInit(): void {
    this.layerTitle += ` ${this.layer.layerCount}`;
    
    this.layer.cards = this.rearrangeCardsOnInit(this.layer.cards);
  }

  rearrangeCardsOnInit(cards: Card[]): Card[] {
    let rearrangedCards: Card[] = [];

    let parentCards: Card[] = [];
    let parentlessCards: Card[] = [];
    let siblingCards: Card[] = [];

    cards.forEach(card => {
      if (card.siblingCard !== null){
        siblingCards.push(card);
      }
      else if (!card.hasChildren){
        parentlessCards.push(card);
      }
      else {
        parentCards.push(card);
      }
    });

    rearrangedCards.push(...parentlessCards);
    rearrangedCards.push(...parentCards);
    rearrangedCards.push(...siblingCards);

    return rearrangedCards
  }

}
