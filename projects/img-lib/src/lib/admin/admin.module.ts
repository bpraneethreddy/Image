import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import {LightboxModule} from 'primeng/lightbox';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  imports: [
    CommonModule,
    LightboxModule,DialogModule
  ],
  declarations: [AdmincomponentComponent],
  exports:[AdmincomponentComponent],
  providers: [],
})
export class AdminModule { }
