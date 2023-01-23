import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, {  Autoplay,
  Pagination,
  Scrollbar, } from "swiper";
import { PagesService } from 'src/app/services/pages.service';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Scrollbar]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class HomeComponent implements OnInit {
  sliders:any = [];
  constructor(private _PagesService: PagesService) {
    this.getHomeSliders();
  }

  ngOnInit(): void {
  }

  // get sliders of home section
  getHomeSliders() {
    this._PagesService.getSliders().subscribe((response:any) => {
      if (response.status == 200 ) {
        this.sliders = response.data;
      } else {
        console.log("failed")
      }
    } , (error:any) => {
      console.log("failed")
    })
  }
}
