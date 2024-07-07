// src/app/dropdown/dropdown.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showSubmenu = false;

  toggleSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }
}
