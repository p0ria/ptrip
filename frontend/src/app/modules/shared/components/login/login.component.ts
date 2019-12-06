import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as fromRoot from "../../../../store/app.state";
import * as appActions from "../../../../store/app.actions";
import {LoginMode} from "../../../../models/enums/login-mode.enum";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import * as appSelectors from "../../../../store/app.selectors";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  errors: string[] = [];
  usernameMinLength = 5;
  passwordMinLength = 5;

  usernameControl = new FormControl(
    '', [Validators.required]);
  passwordControl = new FormControl(
    '', [Validators.required]);

  loginForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    }
  );

  private unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<fromRoot.State>) {
    this.store.pipe(
      select(appSelectors.getLoginErrors),
      takeUntil(this.unsubscribe)).subscribe(
      errs => this.updateErrors(errs)
    );
    this.loginForm.valueChanges.subscribe(_ => this.updateErrors());
    this.updateErrors();
  }


  ngOnInit() {
  }

  enter() {
    this.store.dispatch(new appActions.LoginHttp(
      {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
    ));
  }

  cancel() {
    this.store.dispatch(new appActions.ShowLogin(LoginMode.None));
  }


  updateErrors(otherErrors: string[] = null){
    this.errors = [];
    if(this.usernameControl.errors){
      if(this.usernameControl.errors.required) this.errors.push('نام کاربری را وارد نمایید');
      if(this.usernameControl.errors.minlength) this.errors.push(`نام کاربری می بایست حداقل ${this.usernameMinLength} کاراکتر باشد`);
    }
    if(this.passwordControl.errors){
      if(this.passwordControl.errors.required) this.errors.push('پسورد را وارد نمایید');
      if(this.passwordControl.errors.minlength) this.errors.push(`کلمه عبور می بایست حداقل ${this.passwordMinLength} کاراکتر باشد`);
    }

    if(otherErrors){
      for(let err of otherErrors){
       this.errors.push(err);
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
