import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitsEditComponent } from './exhibits-edit.component';

describe('ExhibitsEditComponent', () => {
  let component: ExhibitsEditComponent;
  let fixture: ComponentFixture<ExhibitsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
