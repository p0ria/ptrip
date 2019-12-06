import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TripsComponent} from "./components/trips/trips.component";
import {TripDetailComponent} from "./components/trip-detail/trip-detail.component";

export const routes: Routes = [
  {
    path: '', component: TripsComponent, pathMatch: 'full'
  },
  {
    path: ':id', component: TripDetailComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule {}
