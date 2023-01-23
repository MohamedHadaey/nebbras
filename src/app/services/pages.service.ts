import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  baseUrl:any = "https://dashboard.nebbrasc.com/api/"
  constructor(private _HttpClient: HttpClient) { }

  // get home sliders
  getSliders():Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}sliders`)
  }

  // get about section data
  getAboutData():Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}about`)
  }

  // get projects section data
  getProjectsData():Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}projects`)
  }

  // get clients section data
  getClientsData():Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}client_mages`)
  }

  // get settings
  getSettings():Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}Setting`)
  }
}
