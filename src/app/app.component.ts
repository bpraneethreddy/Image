import { Component } from '@angular/core';
import {LoginModule} from 'tsslogin';
import { ImgLibModule, ImgLibService } from 'projects/img-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private img: ImgLibService){
    this.img.start();
  }
}
