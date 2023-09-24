import { Component } from '@angular/core';

import { Card } from './models/card';
import { Layer } from './models/layer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Roadmap';

  //layerCount: number[] = [1,2];

  layers: Layer[] = [
    new Layer(1, [
      new Card(1, 1, "Card 1", 0, null),
      new Card(1, 2, "Card 2", 0, 1),
      new Card(1, 3, "Card 3", 0, null)
    ]),
    new Layer(2, [
      new Card(2, 4, "Card 4", 1, null),
      new Card(2, 5, "Card 5", 1, null)
    ])
  ];

}
