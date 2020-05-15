import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector) { }
  intercept(req ,  next):any {
   let authService = this.injector.get(AuthService)
    let tokeniizedReq =  req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getTokem()}`
      }
    })
    return next.handle(tokeniizedReq);
  }


}
