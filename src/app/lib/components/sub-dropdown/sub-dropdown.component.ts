import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subdropdown',
  templateUrl: './sub-dropdown.component.html',
  //   styleUrls: ['./subnav.component.css']
})
export class SubDropdownComponent {
  @Input() title: string | undefined;
  @Input() items: { label: string; link: string; url?: string }[] | undefined;

  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  Showsubbuttonimg: boolean = false;

  //   items = [
  //     { label: 'Item 1', link: '/item1' },
  //     { label: 'Item 2', link: '/item2' },
  //   ];
  viewsubdata(data: any) {
    console.log(data);
    this.Showsubbuttonimg = true;
    if (data.label === 'INBOUND-MANAGEMENT') {
      // this.notify.emit('hello i am abhi');
      data.url =
        'https://www.vantec-gl.com/solution/scm/img/pc_inbound_im01.png';
    }
  }
}
