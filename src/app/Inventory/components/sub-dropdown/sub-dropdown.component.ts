import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subdropdown',
  templateUrl: './sub-dropdown.component.html',
//   styleUrls: ['./subnav.component.css']
})
export class SubDropdownComponent {
  @Input() title: string | undefined;
  @Input() items: { label: string; link: string; }[] | undefined;

//   items = [
//     { label: 'Item 1', link: '/item1' },
//     { label: 'Item 2', link: '/item2' },
//   ];
  
 
}
