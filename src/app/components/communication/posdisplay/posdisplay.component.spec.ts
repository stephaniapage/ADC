import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSDisplayComponent } from './posdisplay.component';

describe('POSDisplayComponent', () => {
  let component: POSDisplayComponent;
  let fixture: ComponentFixture<POSDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
