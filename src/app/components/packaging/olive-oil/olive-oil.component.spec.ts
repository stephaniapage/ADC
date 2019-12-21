import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveOilComponent } from './olive-oil.component';

describe('OliveOilComponent', () => {
  let component: OliveOilComponent;
  let fixture: ComponentFixture<OliveOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OliveOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OliveOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
