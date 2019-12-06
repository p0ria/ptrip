import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./modules/core/core.module";
import {AppNgrxModule} from "./app-ngrx.module";
import {SocketModule} from "./socket.module";
import {SharedModule} from "./modules/shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./common/token.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    AppNgrxModule,
    SocketModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
