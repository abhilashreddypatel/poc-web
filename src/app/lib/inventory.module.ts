import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SubDropdownComponent } from './components/sub-dropdown/sub-dropdown.component';
import { FooterComponent } from './components/footer/footer.compoent';
import { warehouseManagementModule } from '../warehouse-management/warehouse-management.module';
import { SideBarsComponent } from './components/side-bars/side-bars.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SubDropdownComponent,
    FooterComponent,
    SideBarsComponent,
  ],
  imports: [CommonModule, RouterModule, warehouseManagementModule],
  exports: [
    MainComponent,
    HeaderComponent,
    SubDropdownComponent,
    FooterComponent,
    SideBarsComponent,
  ],
})
export class InventoryModule {}
