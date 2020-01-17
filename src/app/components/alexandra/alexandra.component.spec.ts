import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandraComponent } from './alexandra.component';

describe('AlexandraComponent', () => {
  let component: AlexandraComponent;
  let fixture: ComponentFixture<AlexandraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexandraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
