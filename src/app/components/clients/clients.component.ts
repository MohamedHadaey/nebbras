import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
// import swiper components
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);
declare const $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientsComponent implements OnInit {
  clients:any = [];
  constructor(private _PagesService: PagesService) {
    this.getClientsImages()
   }

  ngOnInit(): void {
  }

  // get clients section data
  getClientsImages() {
    this._PagesService.getClientsData().subscribe((response:any) => {
      if (response.status == 200 ) {
        this.clients = response.data;
      } else {
        console.log("failed")
      }
    } , (error:any) => {
      console.log("failed")
    })
  }
}
