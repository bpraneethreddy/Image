import { Component, OnInit, Input } from '@angular/core';
import { ImgProperties } from '../../img-properties';



/**
 * This component wil be useful for displaying the image based on the options  data
 * 
 * @export
 * @class ViewComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'lib-view',
  templateUrl: './view.picker.component.html',
  styleUrls: ['./view.picker.component.css']
})

export class ViewComponent implements OnInit {
  @Input() options: ImgProperties ;
  data:any={
  };
  display: boolean = false;
  constructor() { 
   
  }
  
  ngOnInit() {
  
  }
  /**
   * This is method which will be used for opening the model and setting the display value to tru
   * 
   * @memberof ViewComponent
   */
  showDialog(){
    this.display=true;
  }
}
