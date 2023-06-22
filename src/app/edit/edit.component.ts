import { Component, Input } from '@angular/core';
import { Chunk } from '../app.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', '../app.custom.scss'],
})
export class EditComponent {
  @Input('chunk') chunk = {} as Chunk;
  addExamPoint() {
    this.chunk.list.push({ question: '', answer: '' });
  }
}
