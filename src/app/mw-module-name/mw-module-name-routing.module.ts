import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwModuleNameComponent } from './mw-module-name.component';

const routes: Routes = [{ path: '', component: MwModuleNameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwModuleNameRoutingModule { }
