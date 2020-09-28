import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentThreeComponent } from './components/component-three/component-three.component';
import { SubComponentComponent } from './components/sub-component/sub-component.component';
import {CheckBeforeLeaveComponent} from './components/check-before-leave-component/check-before-leave.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    SubComponentComponent,
    CheckBeforeLeaveComponent
  ],
  imports: [
    CommonModule,
    CheckBeforeLeaveComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
