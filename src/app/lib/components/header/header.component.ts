// src/app/dropdown/dropdown.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imgPathNav: string;

  constructor() {
    this.imgPathNav = 'assets/images/a.png';
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // document.getElementById("navbar").style.top = "0";
      } else {
        // document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
  }
}
