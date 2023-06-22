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
      'display',
      'intro'
    ),
    new Chunk(
      'Letters 4-6',
      [
        { question: 'Letter 4?', answer: 'd' },
        { question: 'Letter 5?', answer: 'e' },
        { question: 'Letter 6?', answer: 'f' },
      ],
      'beginner',
      'display',
      'intro'
    ),
  ];
  addNewChunk() {
    this.chunks.push(
      new Chunk(
        'Exam title..',
        [
          {
            question: 'Question 1. How to make an exam in here?',
            answer:
              'Click the "EDIT" button above, and just fill in the questions & answers!',
          },
          {
            question: 'Question 2. Okay, how to then take exam I have made?',
            answer:
              'After you have edited your questions & answers, simply click the "BACK TO DISPLAY" button and go at it! Then hit the "SUBMIT" button.',
          },
          {
            question: 'Question 3. How about adding and deleting exams?',
            answer: 'Simply click the "ADD EXAM" or "DELETE EXAM" buttons!',
          },
          {
            question: 'Question 4. How does it work?',
            answer:
              'It is as if you made a list of questions and answers, and then you take on the questions without looking at the answers. When you are done, you check your answers with the list of proper answers.',
          },
          {
            question: 'Question 5. Now what?',
            answer:
              'Just delete these question & answer points, and make your own list!',
          },
        ],
        'beginner',
        'display',
        'intro'
      )
    );
  }
  onExamDeleted(examTitle: string) {
    this.chunks = this.chunks.filter((chunk) => chunk.title !== examTitle);
  }
  title = 'exam-yourself';
}
