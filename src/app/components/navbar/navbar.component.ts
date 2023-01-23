import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/services/translation.service';
declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentLanguage: any = localStorage.getItem("currentLanguage");
  constructor(
    public _TranslationService: TranslationService,public translate: TranslateService){}

  ngOnInit(): void {
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
