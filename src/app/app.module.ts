import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from 'tsslogin';
import {MenuLibModule} from 'tssmenu-lib';
import { ImgLibModule, ImgLibService, AdminModule } from 'projects/img-lib/src/public_api';
import {LightboxModule} from 'primeng/lightbox';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,LoginModule,MenuLibModule,ImgLibModule,AdminModule
  ],
  // providers: [ImgLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
