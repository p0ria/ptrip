import {Injectable} from "@angular/core";
import {ModalService} from "./modal.service";
import {LoginComponent} from "../../shared/components/login/login.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {select, Store} from "@ngrx/store";
import * as fromRoot from "../../../store/app.state";
import * as appSelectors from "../../../store/app.selectors";

@Injectable()
export class LoginService {

  private token_key = 'ptrip_token';
  private _isLogin: boolean = false;
  private _token: string;

  constructor(
    private modalService: ModalService,
    private http: HttpClient,
    private store: Store<fromRoot.State>){
    this.store.pipe(select(appSelectors.getToken))
      .subscribe(token => {
        this._isLogin = !!token;
        this._token = token;
      });
  }

  get isLogin(): boolean {
    return this._isLogin;
  }

  get token(): string {
    return this._token;
  }

  showLoginDialog(inputs = {}, outputs = {}){
    this.modalService.show(LoginComponent, inputs, outputs)
  }

  login(username: string, password: string): Observable<{access_token: string}> {
    let body = JSON.stringify({username: username, password: password});
    return this.http.post<{access_token: string}>(
      environment.tokenUrl,
      body,
      {headers: {"Content-Type": "application/json", "No-Auth": "true"}}
    );
  }

  setToken(token: string){
    localStorage.setItem(this.token_key, token);
  }

  loadToken(): string | null{
    return localStorage.getItem(this.token_key);
  }
}
