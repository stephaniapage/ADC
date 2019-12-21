import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAdvertComponent } from './print-advert.component';

describe('PrintAdvertComponent', () => {
  let component: PrintAdvertComponent;
  let fixture: ComponentFixture<PrintAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
