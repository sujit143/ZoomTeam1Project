import { TestBed } from '@angular/core/testing';

import { LocationsdataService } from './locationsdata.service';

describe('LocationsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationsdataService = TestBed.get(LocationsdataService);
    expect(service).toBeTruthy();
  });
});
