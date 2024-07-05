// src/app/dropdown/dropdown.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  showSubmenu = false;

  toggleSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }
}
