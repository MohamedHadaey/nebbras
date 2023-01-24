import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PagesService } from 'src/app/services/pages.service';
import { TranslationService } from 'src/app/services/translation.service';
declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  settings:any = [];
  currentLanguage: any = localStorage.getItem("currentLanguage");
  constructor(
    public _TranslationService: TranslationService,public translate: TranslateService, private _PagesService:PagesService){
      this.getLogo();
    }

  ngOnInit(): void {
  }


  // get logo
  getLogo() {
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

  // get english language
  getEnglish() {
    this._TranslationService.currentLang('en');
    this.currentLanguage = "en";
    window.location.reload();

  }

  // get arabic language
  getArabic() {
    this._TranslationService.currentLang('ar');
    this.currentLanguage = "ar";
    window.location.reload();
  }
}
