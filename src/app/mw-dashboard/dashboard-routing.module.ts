import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {CheckBeforeLeaveComponent} from './components/check-before-leave-component/check-before-leave.component';
import {RestrictedByLoadCanLoadGuard} from '../guards/can-load/restricted-by-load-can-load.guard';
import {DashboardCanActivateGuard} from '../guards/can-activate/dashboard-can-activate.guard';
import {DashboardAccountsResolver} from '../guards/resolver/dashboard-accounts.resolve';

const routes: Routes = [
  {
    path: '',
    // resolve make sure data is ready or services have loaded data before we go to this page
    resolve: DashboardAccountsResolver,

    // canActivate specify if we can activate this one route plus all its children
    canActivate: DashboardCanActivateGuard,
    component: DashboardComponent
  },
  {
    path: 'restricted-by-leave-component',
    // canDeactivate specify check before we leave the component
    // canDeactivate:
    component: CheckBeforeLeaveComponent
  },
 {
    path: 'restricted-by-load',
      // canLoad specify restriction of the loading of this module
      canLoad: RestrictedByLoadCanLoadGuard,
      loadChildren: () => import('./mw-restricted-by-load/mw-restricted-by-load.module').then(m => m.MwRestrictedByLoadModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./mw-login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**', redirectTo: 'login'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
