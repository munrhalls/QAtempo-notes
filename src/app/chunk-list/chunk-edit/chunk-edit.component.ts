import { Output, EventEmitter, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chunk-edit',
  templateUrl: './chunk-edit.component.html',
  styleUrls: ['./chunk-edit.component.scss'],
})
export class ChunkEditComponent {
  @Input('list') list: {
    question: string;
    answer: string;
  }[] = [];
  @Input('title') title: string = '';
  @Output() modeChanged = new EventEmitter<string>();

  saveEdit() {
    this.modeChanged.emit('display');
  }
}
