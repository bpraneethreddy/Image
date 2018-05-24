import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdmincomponentComponent],
  exports:[AdmincomponentComponent]
})
export class AdminModule { }
