import { TestBed } from '@angular/core/testing';

import { FuelQuoteService } from './fuel-quote.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('FuelQuoteService', () => {
  let service: FuelQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
        providers: [FuelQuoteService, HttpClient]
    });
    service = TestBed.inject(FuelQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
