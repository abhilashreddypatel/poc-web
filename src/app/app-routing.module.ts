import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { MainComponent } from './lib/components/main/main.component';
import { InventoryModule } from './lib/inventory.module';
import { warehouseManagementModule } from './warehouse-management/warehouse-management.module';
import { inboundmanagementComponent } from './warehouse-management/inbound-management/inbound-management';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'inboundmanagement', component: inboundmanagementComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InventoryModule,
    warehouseManagementModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
