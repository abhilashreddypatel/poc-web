import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SubDropdownComponent } from './components/sub-dropdown/sub-dropdown.component';

@NgModule({
  declarations: [
    MainComponent,
    DropdownComponent,
    SubDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule  // Import RouterModule for routing functionalities
  ],
  exports: [
    MainComponent,
    DropdownComponent
  ]
})
export class InventoryModule { }
