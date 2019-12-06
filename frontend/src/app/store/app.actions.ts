import {Action} from "@ngrx/store";
import {LoginMode} from "../models/enums/login-mode.enum";

export enum AppActionTypes {
  LoadToken = '[App] Load Token',
  LoadTokenSuccess = '[App] Load Token Success',
  ShowLogin = '[App] Show Login',
  LoginHttp = '[App] Login Http',
  LoginHttpSuccess = '[App] Login Http Success',
  LoginHttpFail = '[App] Login Http Fail'
}

export class LoadToken implements Action {
  readonly type = AppActionTypes.LoadToken;
}

export class LoadTokenSuccess implements Action {
  readonly type = AppActionTypes.LoadTokenSuccess;
  constructor(public payload: string){}
}

export class ShowLogin implements Action {
  readonly type = AppActionTypes.ShowLogin;
  constructor(public payload: LoginMode){}
}

export class LoginHttp implements Action {
  readonly type = AppActionTypes.LoginHttp;
  constructor(public payload: {username: string, password: string}){}
}

export class LoginHttpSuccess implements Action {
  readonly type = AppActionTypes.LoginHttpSuccess;
  constructor(public payload: string){}
}

export class LoginHttpFail implements Action{
  readonly type = AppActionTypes.LoginHttpFail;
  constructor(public payload: string[]){}
}

export type AppActions =
  LoadToken |
  LoadTokenSuccess |
  ShowLogin |
  LoginHttp |
  LoginHttpSuccess |
  LoginHttpFail;


