import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
