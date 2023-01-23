import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class MyIntercetor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newReq = req.clone({
     headers : new HttpHeaders({
       "lang" : `${localStorage.getItem("currentLanguage")}`,
     })
    })
    return next.handle(newReq);
  }
 }
