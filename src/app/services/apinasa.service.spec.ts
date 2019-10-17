import { TestBed } from '@angular/core/testing';

import { ApinasaService } from './apinasa.service';

describe('ApinasaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApinasaService = TestBed.get(ApinasaService);
    expect(service).toBeTruthy();
  });
});
