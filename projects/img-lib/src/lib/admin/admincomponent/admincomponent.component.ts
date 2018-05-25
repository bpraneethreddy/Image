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
  images: any[];
   constructor(private img:ImgLibService) {

    this.images = [];
      //  this.images.push({source:'https://track.zerocodeplatform.com:443/TssTaskTrackerServices/public/employees/Image_35_9002c641-35bc-46a3-84bb-c07ef4aa89f2.jpg', thumbnail: 'https://track.zerocodeplatform.com:443/TssTaskTrackerServices/public/employees/Image_35_9002c641-35bc-46a3-84bb-c07ef4aa89f2.jpg', title:'Sopranos 1'});
        
// this.options={
//   "url":"https://track.zerocodeplatform.com:443/TssTaskTrackerServices/public/employees/Image_35_9002c641-35bc-46a3-84bb-c07ef4aa89f2.jpg",
//   "height":180,
//   "width":150
// }
   } 
   imageList = [];
   
  ngOnInit() {
  }

  openModal() {
    console.log('view');
    this.display = true;
  
    }

}
