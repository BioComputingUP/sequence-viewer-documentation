import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {ProSeqViewer} from 'proseqviewer/dist';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TabsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
