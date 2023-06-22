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
      [
        { question: 'Letter 1?', answer: 'a' },
        { question: 'Letter 2?', answer: 'b' },
        { question: 'Letter 3?', answer: 'c' },
      ],
      'beginner',
      'display'
    ),
    new Chunk(
      'Letters 4-6',
      [{ question: 'Letter 4?', answer: 'd' }],
      'beginner',
      'display'
    ),
  ];

  title = 'exam-yourself';
}
