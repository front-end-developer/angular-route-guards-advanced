import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MwModuleNameRoutingModule } from './mw-module-name-routing.module';
import { MwModuleNameComponent } from './mw-module-name.component';


@NgModule({
  declarations: [MwModuleNameComponent],
  imports: [
    CommonModule,
    MwModuleNameRoutingModule
  ]
})
export class MwModuleNameModule { }
