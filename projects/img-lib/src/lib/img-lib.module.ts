import { NgModule } from '@angular/core';
import { ImgLibComponent } from './img-lib.component';
import { AdminModule, ImgLibService } from '../public_api';
import {LightboxModule} from 'primeng/lightbox';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [DialogModule
  ],
  declarations: [ImgLibComponent],
  exports: [ImgLibComponent],

})
export class ImgLibModule { }
