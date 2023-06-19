import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { check2Circle, xCircle, alignBottom } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListMakerComponent } from './list-maker/list-maker.component';
import { ChunkComponent } from './chunk-list/chunk/chunk.component';
import { ChunkListComponent } from './chunk-list/chunk-list.component';
import { ChunkEditComponent } from './chunk-list/chunk-edit/chunk-edit.component';

const icons = {
  check2Circle,
  xCircle,
  alignBottom,
};

@NgModule({
  declarations: [
    AppComponent,
    ChunkComponent,
    ListMakerComponent,
    ChunkListComponent,
    ChunkEditComponent,
  ],
  imports: [BrowserModule, FormsModule, NgxBootstrapIconsModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
