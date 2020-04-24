import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelQuoteFormComponent } from './fuel-quote-form.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FuelQuoteFormComponent', () => {
  let component: FuelQuoteFormComponent;
  let fixture: ComponentFixture<FuelQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      FormsModule], 
      providers: [HttpClient],
      declarations: [ FuelQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
