import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitsViewComponent } from './exhibits-view.component';

describe('ExhibitsViewComponent', () => {
  let component: ExhibitsViewComponent;
  let fixture: ComponentFixture<ExhibitsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
