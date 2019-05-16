import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitytripsComponent } from './citytrips.component';

describe('CitytripsComponent', () => {
  let component: CitytripsComponent;
  let fixture: ComponentFixture<CitytripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitytripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitytripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
