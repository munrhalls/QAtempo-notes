import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chunk-list',
  templateUrl: './chunk-list.component.html',
  styleUrls: ['./chunk-list.component.scss'],
})
export class ChunkListComponent {
  @Input('mode') mode: string = '';
  listNames = ['List a', 'List b'];
  lists = [
    [
      { question: 'Letter 1?', answer: 'a' },
      { question: 'Letter 2?', answer: 'b' },
      { question: 'Letter 3?', answer: 'c' },
    ],
    [
      { question: 'Letter 4?', answer: 'd' },
      { question: 'Letter 5?', answer: 'f' },
      { question: 'Letter 6?', answer: 'g' },
    ],
  ];
}
