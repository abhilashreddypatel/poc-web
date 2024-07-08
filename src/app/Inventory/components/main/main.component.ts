// src/app/main/main.component.ts
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  //   styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: boolean = true;

  selectedButtonId: number | null = null;

  buttons = [
    {
      id: 1,
      name: 'CUSTEMER INTERFACE',
      img: '',
    },
    {
      id: 2,
      name: 'ORDER MANAGEMENT',
      img: '',
    },
    { id: 3, name: 'TRANSPORTATION AND ASSET MANAGEMENT', img: '' },
    { id: 4, name: 'WAREHOSEING AND INVENTORY MANAGEMENT', img: '' },
  ];

  aboutItems: { label: string; link: string }[] | undefined;
  servicesItems: { label: string; link: string }[] | undefined;
  partnersItems: { label: string; link: string }[] | undefined;

  ngOnInit(): void {
    this.servicesItems = [];
    this.resetimage();
  }
  toggleSelectedButton(buttonId: number) {
    this.selectedButtonId =
      this.selectedButtonId === buttonId ? null : buttonId;
  }
  getsubheaders(data: any) {
    console.log(data.id);

    this.servicesItems = [];
    this.resetimage();

    if (data.id === 1 && data.img != null) {
      data.img =
        'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';
      this.servicesItems = [
        { label: 'Customer Acquisition', link: '/bring' },
        { label: 'Customer Onboarding', link: '/deliver' },
        { label: 'Customer Onboarding', link: '/package' },
        { label: 'Customer Support', link: '/express' },
        { label: 'Customer Loyalty Programs', link: '/express' },
      ];
    }

    if (data.id === 2) {
      data.img =
        'https://acme-world.com/app/default/assets/addons/default/np/site-theme/resources/img/img-industry-placeholder.png';
      this.servicesItems = [
        { label: 'Receive & Process Customer Orders', link: '/company' },
        { label: 'Manage order visibility & Tracking', link: '/team' },
      ];
    }

    if (data.id === 3) {
      data.img =
        'https://fedex-dims.brightspotgocdn.com/dims4/default/12c6e42/2147483647/strip/true/crop/3000x1689+0+156/resize/1000x563!/format/webp/quality/90/?url=https%3A%2F%2Ffedex-static.brightspotgocdn.com%2F1a%2F92%2F4e85381647919b6cf66dba2c01f8%2F220512-ev-sameday-city-truck-029.jpg';
      this.servicesItems = [
        {
          label: 'Arrange & Coordinate Coneyance, Shipments, Assets',
          link: '/link1',
        },
        { label: 'Track Conveyance, Shipments & Assets', link: '/link2' },
        { label: 'Fleet Management', link: '/link3' },
        { label: 'P&D Optimization', link: '/link4' },
      ];
    }
    if (data.id === 4) {
      this.servicesItems = [
        {
          label: 'Shipments with specialized handling',
          link: '/link1',
        },
        { label: 'Shipments with non specialized handling', link: '/link2' },
      ];
    }
  }

  resetimage() {
    this.buttons.forEach((button) => {
      if (button.img) {
        button.img = '';
      }
    });
  }
}
