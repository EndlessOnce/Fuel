import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelQuoteHistoryComponent } from './fuel-quote-history.component';

describe('FuelQuoteHistoryComponent', () => {
  let component: FuelQuoteHistoryComponent;
  let fixture: ComponentFixture<FuelQuoteHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelQuoteHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelQuoteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
