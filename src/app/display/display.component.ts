import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss', '../app.custom.scss'],
})
export class DisplayComponent {
  @Input('chunk') chunk!: {
    title: string;
    list: { question: string; answer: string }[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    mode: string;
    displayFullness: string;
  };
  answers: string[] = [];
  passExam: null | boolean = null;
  deleteExamConfirm: boolean = false;

  @Output() examDeleted = new EventEmitter<string>();

  checkAnswers() {
    this.passExam = this.chunk.list.every(
      (item, index) => item.answer === this.answers[index]
    );
  }

  deleteExam() {
    this.examDeleted.emit(this.chunk.title);
  }
}
