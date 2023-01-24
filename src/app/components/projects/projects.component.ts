import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects:boolean = false;
  projectsData:any = [];
  constructor(private _PagesService: PagesService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  // get data of projects section
  getData() {
    this._PagesService.getProjectsData().subscribe((response:any) => {
      if (response.status == 200 ) {
        this.projectsData = response.data.data;
      } else {
        console.log("failed")
      }
    } , (error:any) => {
      console.log("failed")
    })
  }


  showAllProjects() {
    this.allProjects =! this.allProjects
  }

}
