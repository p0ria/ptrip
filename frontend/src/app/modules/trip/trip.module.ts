import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {COMPONENTS} from "./components";
import {TripRoutingModule} from "./trip-routing.module";
import {select, Store, StoreModule} from "@ngrx/store";
import {reducer} from "./store/trip.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TripEffects} from "./store/trip.effects";
import * as fromTrip from "./store/trip.state";
import * as tripActions from "./store/trip.actions";
@NgModule({
  imports: [
    SharedModule,
    TripRoutingModule,
    StoreModule.forFeature('trip', reducer),
    EffectsModule.forFeature([TripEffects])
  ],
  declarations: [...COMPONENTS]
})
export class TripModule {
  constructor(private store: Store<fromTrip.State>){
    this.store.dispatch(new tripActions.LoadTrips());
    this.store.dispatch(new tripActions.ListenToSocket())
  }
}
