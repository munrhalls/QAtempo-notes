import { Component } from '@angular/core';

@Component({
  selector: 'app-chunk-list',
  templateUrl: './chunk-list.component.html',
  styleUrls: ['./chunk-list.component.scss'],
})
export class ChunkListComponent {
  listNames = ['List a', 'List b'];
  lists = [
    [
      { question: 'Letter?', answer: 'a' },
      { question: 'Letter?', answer: 'b' },
      { question: 'Letter?', answer: 'c' },
    ],
    [
      { question: 'Letter?', answer: 'd' },
      { question: 'Letter?', answer: 'f' },
      { question: 'Letter?', answer: 'g' },
    ],
  ];
}
