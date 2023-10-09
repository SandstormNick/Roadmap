//This is the Documentation for the Leader-Line library
//https://anseki.github.io/leader-line/

import { Injectable } from '@angular/core';
import { Layer } from '../models/layer';

declare var LeaderLine: any;

@Injectable({
  providedIn: 'root'
})
export class LeaderLineService {

  constructor() { }

  // What must this service do?
  // * This is a service that must first allow everything to finish initializing.
  // * Then it must loop through card components.
  // * It must then get elements by ID (on each of the card element).
  // * Later when you can add cards it should be able to refresh somehow.
  // * This should then be able to draw the leader-lines (using the leader-line package) between all the card components.

   public DrawLeaderLines(layers: Layer[]): void {

    let startElement = document.getElementById(''),
        endElement = document.getElementById('');

    //Cycle through all the layers
    layers.forEach((layer, index, layers) => {
        
      //Now cycle through all the cards - For loop inside a for loop
      layer.cards.forEach(card => {

        // Layer 1
        if (layer.layerCount == 1){
          if (card.siblingCard == null){
            startElement = document.getElementById("start-point");
            endElement = document.getElementById(card.cardId.toString());

            // New leader line has red color and size 4.
            if (startElement != null && endElement != null){
              new LeaderLine(startElement, endElement, {color: 'red', size: 4, path: 'straight'});
            }
          }
        }

        // All the layers in between layer 1 and the last layer
        if (card.parentCard != 0){
          startElement = document.getElementById(card.parentCard.toString());
          endElement = document.getElementById(card.cardId.toString());

          // New leader line has red color and size 4.
          if (startElement != null && endElement != null){
            new LeaderLine(startElement, endElement, {color: 'red', size: 4, path: 'arc'});
          }
        }

        // Last layer
        if (Object.is(layers.length-1, index)){
          startElement = document.getElementById(card.cardId.toString());
          endElement = document.getElementById("end-goal");

          // New leader line has red color and size 4.
          if (startElement != null && endElement != null){
            new LeaderLine(startElement, endElement, {color: 'red', size: 4, path: 'straight'});
          }
        }
        
      });
      
    });
   }
}