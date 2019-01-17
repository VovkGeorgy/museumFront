import { TestBed, inject } from '@angular/core/testing';

import { ExhibitsService } from './exhibits.service';

describe('ExhibitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExhibitsService]
    });
  });

  it('should be created', inject([ExhibitsService], (service: ExhibitsService) => {
    expect(service).toBeTruthy();
  }));
});
