import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./components/master/master.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: MasterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../trip/trip.module').then(m => m.TripModule)
      },
      {
        path: 'trips',
        loadChildren: () => import('../trip/trip.module').then(m => m.TripModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
