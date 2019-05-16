import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOrdersComponent } from './city-orders.component';

describe('CityOrdersComponent', () => {
  let component: CityOrdersComponent;
  let fixture: ComponentFixture<CityOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
