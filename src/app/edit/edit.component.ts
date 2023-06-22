import { Component, Input } from '@angular/core';
import { Chunk } from '../app.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  @Input('chunk') chunk!: {
    title: string;
    list: { question: string; answer: string }[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    mode: string;
  };
}
