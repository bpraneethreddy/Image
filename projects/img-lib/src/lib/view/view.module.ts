import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { ViewComponent } from './view-picker/view.picker.component';
import { EditComponent } from './edit.picker/edit.picker.component';
;

/**
 * This is the image view module it contains two components view picker and edit picker component
 * 
 * @export
 * @class ViewModule
 */
@NgModule({
  imports: [
    CommonModule,DialogModule
  ],
  declarations: [ViewComponent, EditComponent],
  exports: [ViewComponent],
})
export class ViewModule { }
