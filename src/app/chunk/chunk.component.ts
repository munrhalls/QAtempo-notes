import { Component } from '@angular/core';

@Component({
  selector: 'app-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.scss'],
})
export class ChunkComponent {
  list = ['a', 'b', 'c'];

  checkChunk() {}
}
