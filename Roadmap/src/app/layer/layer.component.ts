import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit{
  layerTitle: string = "Layer";
  @Input() layerCount: number;

  ngOnInit(): void {
    this.layerTitle += ` ${this.layerCount}`;
  }

}
