import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MwRestrictedByLoadRoutingModule } from './mw-restricted-by-load-routing.module';
import { MwRestrictedByLoadComponent } from './mw-restricted-by-load.component';


@NgModule({
  declarations: [MwRestrictedByLoadComponent],
  imports: [
    CommonModule,
    MwRestrictedByLoadRoutingModule
  ]
})
export class MwRestrictedByLoadModule { }
