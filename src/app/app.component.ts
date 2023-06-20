import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chunks: {
    title: string;
    list: { question: string; answer: string }[];
    mode: string;
  }[] = [
    {
      title: 'Letters',
      list: [{ question: 'Letter 1?', answer: 'a' }],
      mode: 'display',
    },
    {
      title: 'Letters',
      list: [{ question: 'Letter 2?', answer: 'b' }],
      mode: 'display',
    },
    {
      title: 'Letters',
      list: [{ question: 'Letter 3?', answer: 'c' }],
      mode: 'display',
    },
  ];

  title = 'exam-yourself';
}
