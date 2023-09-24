import { Component, Input, OnInit } from '@angular/core';
import { Layer } from '../models/layer';

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
    console.log(this.layer);
  }

}
