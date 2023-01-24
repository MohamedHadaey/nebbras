import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
declare var google: any;
declare const $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  settings: any = [];
  lat:any = 30.031092580675658;
  lng:any = 31.225590705871582;
  constructor(private _PagesService: PagesService) {
    this.getLocation();


  }

  ngOnInit(): void {}

  // get data of settings
  getLocation() {
    this._PagesService.getSettings().subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.settings = response.data;
          console.log(this.settings.lat, this.settings.lng);
          this.lat = this.settings.lat
          this.lng = this.settings.lng
        } else {
          console.log('failed');
        }
      },
      (error: any) => {
        console.log('failed');
      }
    );
  }

  // the location on map
  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng,
  };

  location: googleMaps_ApiReturn = {
    position: {
      lat: this.lat,
      lng: this.lng
    },
    status: {
      scaledSize: {
        height: 40,
        width: 40,
        equals(other) {
          return true;
        },
      },
      url: '../../../../assets/maps_images/location.png',
    },
  };
}

interface ProjectStatus {
  iconurl: string;
}

interface googleMaps_ApiReturn {
  position: google.maps.LatLngLiteral;
  status: google.maps.Icon;
}
