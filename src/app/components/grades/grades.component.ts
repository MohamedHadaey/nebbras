import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  settings:any = [];
  constructor(private _PagesService:PagesService){
      this.getGrades();
    }

  ngOnInit(): void {
  }


  // get Grades
  getGrades() {
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
