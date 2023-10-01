import { Component, AfterContentInit } from '@angular/core';

declare var LeaderLine: any;


import { Card } from './models/card';
import { Layer } from './models/layer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'Roadmap';

  ngAfterContentInit(): void {
    //temporary to test leader-line
    setTimeout(function(){

      let startElement = document.getElementById('start'),
        endElement = document.getElementById('end');

        // New leader line has red color and size 4.
        new LeaderLine(startElement, endElement, {color: 'red', size: 4});

    }, 5000)
  }

  //layerCount: number[] = [1,2];

  layers: Layer[] = [
    new Layer(1, [
      new Card(1, 1, "Card 1", 0, null, true),
      new Card(1, 2, "Card 2", 0, 1, false),
      new Card(1, 3, "Card 3", 0, null, false)
    ]),
    new Layer(2, [
      new Card(2, 4, "Card 4", 1, null, true),
      new Card(2, 5, "Card 5", 1, null, false)
    ]),
    new Layer(3, [
      new Card(3, 6, "Layer 3 Card", 4, null, true)
    ]),
    new Layer(4, [
      new Card(4, 7, "Card 7", 6, null, true),
      new Card(4, 8, "Card 8", 0, 7, false)
    ]),
    new Layer(5, [
      new Card(5, 9, "Card 9", 7, null, false)
    ])
  ];

}



// TO DO

// * Add a service that creates all the lead lines once all the components have RouteConfigLoadEnd.