import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestrictedByLoadCanLoadGuard} from './guards/can-load/restricted-by-load-can-load.guard';


const routes: Routes = [
  {
    path: 'module-one', loadChildren: () => import('./mw-module-name/mw-module-name.module').then(m => m.MwModuleNameModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./mw-dashboard/dashboard.module').then(m => m.DashboardModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [RestrictedByLoadCanLoadGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
