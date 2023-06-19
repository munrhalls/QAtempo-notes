import { Component, Input } from '@angular/core';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.scss'],
})
export class ChunkComponent {
  chunkName = 'prototype chunk';
  @Input('list') list: {
    question: string;
    answer: string;
  }[] = [];
  @Input('title') title: string = '';

  submit: string[] = [];
  properSubmit: null | boolean = null;

  checkChunk() {
    this.properSubmit = this.list.every(
      (item, index) => this.list[index]['answer'] === this.submit[index]
    );
    console.log(this.properSubmit);
  }
  resetChunk() {
    this.properSubmit = null;
    this.submit = [];
    console.log(this.submit);
  }
}
