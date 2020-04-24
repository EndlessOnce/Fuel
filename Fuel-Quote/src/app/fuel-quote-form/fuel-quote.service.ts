import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteForm } from './fuel-quote';
import { Form } from './fuel-quote.model';

@Injectable({
  providedIn: 'root'
})
export class FuelQuoteService {

  private address: string[] = [];

  constructor(private _http: HttpClient) { }


  quote(email: string, gallons: number, delivery: Date, address: string, price: string, total: string) {
    const form: Form = {email: email, gallons: gallons, delivery: delivery, address: address, price: price, total: total};
    this._http.post("http://localhost:3000/api/quote/quoteForm", form)
    .subscribe(response => {
      console.log(response);
    });
  }
}
