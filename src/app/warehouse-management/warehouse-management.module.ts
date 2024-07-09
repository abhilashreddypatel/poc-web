import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { recivingComponent } from './inbound-management/reciving/reciving';
//import { prerecivingComponent } from './inbound-management/prereciving/prereciving';
import { putawayComponent } from './inbound-management/putaway/putaway';
import { crossdockingComponent } from './inbound-management/cross-docking/cross-docking';
import { inboundmanagementComponent } from './inbound-management/inbound-management';
import { AppComponent } from '../app.component';
//import { prerecivingComponent } from './inbound-management/reciving/prereciving/prereciving';

// const routes: Routes = [
//   { path: 'reciving', component: recivingComponent },
//   { path: 'prereciving', component: prerecivingComponent },
//   { path: 'putaway', component: putawayComponent },
//   { path: 'crossdocking', component: crossdockingComponent },
//   { path: 'inboundmanagement', component: inboundmanagementComponent },
// ];

@NgModule({
  declarations: [
    // recivingComponent,
    //prerecivingComponent,
    putawayComponent,
    crossdockingComponent,
    inboundmanagementComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [inboundmanagementComponent],
})
export class warehouseManagementModule {}
