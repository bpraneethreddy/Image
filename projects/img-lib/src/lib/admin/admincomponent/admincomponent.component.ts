import { Component, OnInit, Input } from '@angular/core';
import { ImgLibService } from '../../../public_api';

@Component({
  selector: 'lib-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.css']
})
export class AdmincomponentComponent implements OnInit {
  display: boolean = false;
  @Input() options: any ;
  // imageList: any[];

   constructor(private img:ImgLibService) {}
  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  
    }
    // chooseImage(img) {
    //   if (img && img.img && img.img.src) {
    //     this.options.url = img.img.src;
    //     this.display = false;
    //   }
    // }

}
