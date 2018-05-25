import { NgModule } from '@angular/core';
import { ImgLibComponent } from './img-lib.component';
import { AdminModule, ImgLibService } from '../public_api';
import {LightboxModule} from 'primeng/lightbox';

@NgModule({
  imports: [
  ],
  declarations: [ImgLibComponent],
  exports: [ImgLibComponent],

})
export class ImgLibModule { }
