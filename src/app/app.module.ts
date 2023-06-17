import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChunkComponent } from './chunk/chunk.component';
import { ListMakerComponent } from './list-maker/list-maker.component';

@NgModule({
  declarations: [AppComponent, ChunkComponent, ListMakerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
