import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./store/app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'PTrip Website',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class AppNgrxModule {

}
