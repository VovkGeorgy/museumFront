import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursViewComponent } from './tours-view.component';

describe('ToursViewComponent', () => {
  let component: ToursViewComponent;
  let fixture: ComponentFixture<ToursViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
