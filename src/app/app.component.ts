import { Component } from '@angular/core';
import disableDevtool from 'disable-devtool';
import { TranslationService } from './services/translation.service';
import { TranslateService } from '@ngx-translate/core';
declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sticky_Notes';

  currentLanguage: any = '';
  constructor(
    public _TranslationService: TranslationService,public translate: TranslateService,){

      this.currentLanguage = localStorage.getItem('currentLanguage') || 'ar';
      this.translate.use(this.currentLanguage);
      this._TranslationService.currentLang(this.currentLanguage);
      const body = document.getElementsByTagName('body');
      this._TranslationService.currentlang.subscribe((lang) => {
        // this if condition to check direction of all project according to current language
        if (lang == 'ar') {
          body[0].setAttribute('dir', 'rtl');
        } else {
          body[0].setAttribute('dir', 'ltr');
        }
      });

    // to disable inspect element and f12 button
    // disableDevtool();
  }

  ngOnInit(): void {
    setTimeout(function(){
      $('.loading-screen').fadeOut(1000);
   }, 3000);

  }
}
