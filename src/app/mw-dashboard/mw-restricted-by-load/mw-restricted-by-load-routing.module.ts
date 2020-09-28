import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwRestrictedByLoadComponent } from './mw-restricted-by-load.component';

const routes: Routes = [{ path: '', component: MwRestrictedByLoadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwRestrictedByLoadRoutingModule { }
