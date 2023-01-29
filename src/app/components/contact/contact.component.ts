import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { DomSanitizer } from "@angular/platform-browser";
declare var google: any;
declare const $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  settings: any = [];
  locationSrc!:any;
  finalLocationSrc!:any;
  constructor(private _PagesService: PagesService, private sanitizer: DomSanitizer) {
    this.getLocation();
  }

  ngOnInit(): void {}

  // get data of settings
  getLocation() {
    this._PagesService.getSettings().subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.settings = response.data;
          this.locationSrc = `https://maps.google.com/maps?q=${this.settings.lat},${this.settings.lng}&z=8&output=embed&z=11`;
          this.finalLocationSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.locationSrc)
        } else {
          console.log('failed');
        }
      },
      (error: any) => {
        console.log('failed');
      }
    );
  }
}
