import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteForm } from './fuel-quote';

@Injectable({
  providedIn: 'root'
})
export class FuelQuoteService {

  _url = 'http://localhost:3000/fuel-quote-form'

  constructor(private _http: HttpClient) { }

  quote(user: QuoteForm) {
    return this._http.post<any>(this._url, user);
  }
}
