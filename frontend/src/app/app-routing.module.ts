import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
