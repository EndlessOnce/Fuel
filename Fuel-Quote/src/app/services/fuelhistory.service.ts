import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { FuelHistory } from '../fuel-quote-history/fuel-quote-history.component';
@Injectable()
export class HistService {
  private serviceUrl = 'http://localhost:3200/history';
  
  constructor(private http: HttpClient) { }
  
  getHist(): Observable<FuelHistory[]> {
    return this.http.get<FuelHistory[]>(this.serviceUrl);
  }
  
}