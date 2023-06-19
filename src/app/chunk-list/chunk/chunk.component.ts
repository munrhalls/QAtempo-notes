import { Component } from '@angular/core';

@Component({
  selector: 'app-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.scss'],
})
export class ChunkComponent {
  chunkName = 'prototype chunk';
  list = ['a', 'b', 'c'];
  submit: string[] = [];
  properSubmit: null | boolean = null;

  updateSubmit(event: Event, i: number) {
    this.submit[i] = (<HTMLInputElement>event.target).value;
  }
  checkChunk() {
    this.properSubmit = this.list.every(
      (item, index) => this.list[index] === this.submit[index]
    );
    console.log(this.properSubmit);
  }
}
