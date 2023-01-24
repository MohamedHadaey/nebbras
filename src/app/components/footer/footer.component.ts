import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  settings:any = [];
  constructor(private _PagesService:PagesService) {
    this.getSettingsLink();
   }

  ngOnInit(): void {
  }


    // get data of settings
    getSettingsLink() {
      this._PagesService.getSettings().subscribe((response:any) => {
        if (response.status == 200 ) {
          this.settings = response.data;
        } else {
          console.log("failed")
        }
      } , (error:any) => {
        console.log("failed")
      })
    }
}
