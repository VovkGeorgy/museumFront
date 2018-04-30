import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursEditComponent } from './tours-edit.component';

describe('ToursEditComponent', () => {
  let component: ToursEditComponent;
  let fixture: ComponentFixture<ToursEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
