import { TestBed } from '@angular/core/testing';

import { FuelhistoryService } from './fuelhistory.service';

describe('FuelhistoryService', () => {
  let service: FuelhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
