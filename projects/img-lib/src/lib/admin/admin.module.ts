import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import {LightboxModule} from 'primeng/lightbox';

@NgModule({
  imports: [
    CommonModule,
    LightboxModule
  ],
  declarations: [AdmincomponentComponent],
  exports:[AdmincomponentComponent],
  providers: [],
})
export class AdminModule { }
