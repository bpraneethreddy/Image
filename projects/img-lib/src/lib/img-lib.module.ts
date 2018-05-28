import { NgModule } from '@angular/core';
import { ImgLibComponent } from './img-lib.component';

import {DialogModule} from 'primeng/dialog';
import { ViewModule } from './view/view.module';
/**
 * This is the main module in image library which will contains all the declaration of other modules
 * 
 * @export
 * @class ImgLibModule
 */
@NgModule({
  imports: [DialogModule
  ],
  declarations: [ImgLibComponent],
  exports: [ViewModule],

})
export class ImgLibModule { }
