import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboardPackComponent } from './cardboard-pack.component';

describe('CardboardPackComponent', () => {
  let component: CardboardPackComponent;
  let fixture: ComponentFixture<CardboardPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboardPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
