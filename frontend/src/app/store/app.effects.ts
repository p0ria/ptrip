import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import * as appActions from "./app.actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {LoginService} from "../modules/core/services/login.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService){}

  @Effect()
  loadToken$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LoadToken),
    map(_ => {
      let token = this.loginService.loadToken();
      return new appActions.LoadTokenSuccess(token);
    })
  );

  @Effect()
  loginHttp$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LoginHttp),
    mergeMap((action: appActions.LoginHttp) =>
      this.loginService.login(action.payload.username, action.payload.password).pipe(
        map((result: {access_token}) => result.access_token),
        tap(token  => this.loginService.setToken(token)),
        mergeMap(token => [
          new appActions.LoginHttpSuccess(token)]),
        catchError((err: HttpErrorResponse) => {
          if(err.status == 401) return of(new appActions.LoginHttpFail(['کاربر مورد نظر یافت نشد']));
          else return of(new appActions.LoginHttpFail([`خطا در ارتباط با سرور(کد خطا ${err.status})`]));
        }
      )))
  );
}
