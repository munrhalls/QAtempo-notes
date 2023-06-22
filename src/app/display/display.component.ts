import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Chunk } from '../app.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss', '../app.custom.scss'],
})
export class DisplayComponent {
  @Input('chunk') chunk = {} as Chunk;
  answers: string[] = [];
  passExam: null | boolean = null;
  deleteExamConfirm: boolean = false;

  @Output() examDeleted = new EventEmitter<number>();

  checkAnswers() {
    this.passExam = this.chunk.list.every(
      (item, index) => item.answer === this.answers[index]
    );
  }

  deleteExam() {
    this.examDeleted.emit(this.chunk.id);

    this.deleteExamConfirm = false;
  }
}
