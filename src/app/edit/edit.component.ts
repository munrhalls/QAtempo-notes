import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  @Input('chunk') chunk!: {
    title: string;
    list: { question: string; answer: string }[];
    mode: string;
  };
}
