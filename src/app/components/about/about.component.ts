import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData:any = [];
  constructor(private _PagesService: PagesService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  // get about section data
  getData() {
    this._PagesService.getAboutData().subscribe((response:any) => {
      if (response.status == 200 ) {
        this.aboutData = response.data;
      } else {
        console.log("failed")
      }
    } , (error:any) => {
      console.log("failed")
    })
  }
}
