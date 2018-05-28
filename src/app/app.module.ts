import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ImgLibModule } from 'projects/img-lib/src/public_api';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ImgLibModule,DialogModule,BrowserAnimationsModule,ButtonModule
  ],
  // providers: [ImgLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
