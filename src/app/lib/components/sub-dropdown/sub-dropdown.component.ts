import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subdropdown',
  templateUrl: './sub-dropdown.component.html',
  //   styleUrls: ['./subnav.component.css']
})
export class SubDropdownComponent {
  @Input() title: string | undefined;
  @Input() items: { label: string; link: string; url?: string }[] | undefined;

  @Output() Showsubbuttonimg: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  // Showsubbuttonimg: boolean = false;

  //   items = [
  //     { label: 'Item 1', link: '/item1' },
  //     { label: 'Item 2', link: '/item2' },
  //   ];
  viewsubdata(data: any) {
    console.log(data);
    this.Showsubbuttonimg.emit(true);
    if (data.label === 'INBOUND-MANAGEMENT') {
      data.url =
        'https://www.vantec-gl.com/solution/scm/img/pc_inbound_im01.png';
    } else if (data.label === 'INVENTORY MANAGEMENT') {
      data.url =
        'https://www.vantec-gl.com/solution/scm/img/pc_inbound_im01.png';
    } else if (data.label === 'OUTBOUND MANAGEMENT') {
      data.url =
        'https://www.vantec-gl.com/solution/scm/img/pc_inbound_im01.png';
    } else if (data.label === 'RETURNS MANAGEMENT') {
      data.url =
        'https://www.vantec-gl.com/solution/scm/img/pc_inbound_im01.png';
    }
    // data.url = '';
  }
}
