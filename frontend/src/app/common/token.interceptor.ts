import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LoginService} from "../modules/core/services/login.service";
import * as appActions from "../store/app.actions";
import {LoginMode} from "../models/enums/login-mode.enum";
import {tap} from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService,
              private store: Store<any>){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.headers.get('No-Auth') === "true"){
      // Request requires no token
      return next.handle(req.clone());
    }
    if(this.loginService.isLogin){
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + this.loginService.token)
        })
      ).pipe(tap(event => {
        if(event.type == HttpEventType.Response){
          if(event.status == 401){
            this.store.dispatch(new appActions.ShowLogin(LoginMode.Modal));
          }
        }
      }));
    }else{
      this.store.dispatch(new appActions.ShowLogin(LoginMode.Modal));
    }
  }
}
