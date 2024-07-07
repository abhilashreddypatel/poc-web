import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

import { SubDropdownComponent } from './components/sub-dropdown/sub-dropdown.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SubDropdownComponent],
  imports: [
    CommonModule,
    RouterModule, // Import RouterModule for routing functionalities
  ],
  exports: [MainComponent, HeaderComponent],
})
export class InventoryModule {}
