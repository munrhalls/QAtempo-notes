import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {
  eyeFill,
  eye,
  fileEarmarkSpreadsheetFill,
  fileEarmarkSpreadsheet,
  display,
  pencilSquare,
  check2Circle,
  xCircle,
  alignBottom,
} from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';

const icons = {
  eyeFill,
  eye,
  fileEarmarkSpreadsheetFill,
  fileEarmarkSpreadsheet,
  display,
  pencilSquare,
  check2Circle,
  xCircle,
  alignBottom,
};

@NgModule({
  declarations: [AppComponent, DisplayComponent, EditComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FormControl,
    FormGroup,
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
