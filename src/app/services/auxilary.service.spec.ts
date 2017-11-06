import { TestBed, inject } from '@angular/core/testing';

import { AuxilaryService } from './auxilary.service';

describe('AuxilaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuxilaryService]
    });
  });

  it('should be created', inject([AuxilaryService], (service: AuxilaryService) => {
    expect(service).toBeTruthy();
  }));
});
