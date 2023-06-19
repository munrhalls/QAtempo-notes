import { Component } from '@angular/core';

@Component({
  selector: 'app-chunk-list',
  templateUrl: './chunk-list.component.html',
  styleUrls: ['./chunk-list.component.scss'],
})
export class ChunkListComponent {
  lists = [
    ['a', 'b', 'c'],
    ['d', 'f', 'g'],
  ];
}
