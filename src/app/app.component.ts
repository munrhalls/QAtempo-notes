import { Component } from '@angular/core';
import { Chunk, List } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chunks: Chunk[] = [
    new Chunk(
      'Letters 1-3',
      [{ question: 'Letter 1?', answer: 'a' }],
      'display'
    ),
    {
      title: 'Letters',
      list: [{ question: 'Letter 2?', answer: 'b' }],
      mode: 'display',
    },
  ];

  title = 'exam-yourself';
}
