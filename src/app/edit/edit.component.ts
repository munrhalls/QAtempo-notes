import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chunk } from '../app.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', '../app.custom.scss'],
})
export class EditComponent implements OnInit {
  @Input('chunk') chunk = {} as Chunk;

  form = new FormGroup({
    difficulty: new FormControl(this.chunk.difficulty),
  });

  ngOnInit(): void {}
}
