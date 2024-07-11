import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarsComponent } from './side-bars.component';

describe('SideBarsComponent', () => {
  let component: SideBarsComponent;
  let fixture: ComponentFixture<SideBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
