// src/app/main/main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
//   styleUrls: ['./main.component.css']
})
export class MainComponent {
  aboutItems = [
    { label: 'CustemerAcqusition', link: '/company' },
    { label: 'Team', link: '/team' },
    { label: 'Careers', link: '/careers' }
    
  ];

  servicesItems = [
    { label: 'Bring', link: '/bring' },
    { label: 'Deliver', link: '/deliver' },
    { label: 'Package', link: '/package' },
    { label: 'Express', link: '/express' }
  ];

  partnersItems = [
    { label: 'Link 1', link: '/link1' },
    { label: 'Link 2', link: '/link2' },
    { label: 'Link 3', link: '/link3' },
    { label: 'Link 4', link: '/link4' }
  ];
}
