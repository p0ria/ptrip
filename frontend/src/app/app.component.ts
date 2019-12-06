import {Component, OnInit} from '@angular/core';
import {ModalService} from "./modules/core/services/modal.service";
import * as fromRoot from "./store/app.state";
import {select, Store} from "@ngrx/store";
import * as appSelectors from "./store/app.selectors";
import * as appActions from "./store/app.actions";
import {LoginMode} from "./models/enums/login-mode.enum";
import {LoginService} from "./modules/core/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private modalService: ModalService,
    private store: Store<fromRoot.State>,
    private loginService: LoginService){}

  ngOnInit(): void {
    this.store.dispatch(new appActions.LoadToken());
    this.store.pipe(select(appSelectors.getLoginMode))
      .subscribe(mode => {
        if(mode == LoginMode.None) {
          this.modalService.destroy();
        }
        if(mode == LoginMode.Modal){
          this.loginService.showLoginDialog();
        }
        if(mode == LoginMode.Page){
          //TODO: navigate to login url
        }
      })
  }

  removeModal() {
    this.store.dispatch(new appActions.ShowLogin(LoginMode.None));
  }

}
