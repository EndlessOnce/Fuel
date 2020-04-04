import { Component, OnInit } from '@angular/core';
import { history } from './fuel-history';

@Component({
  selector: 'app-fuel-quote-history',
  templateUrl: './fuel-quote-history.component.html',
  styleUrls: ['./fuel-quote-history.component.css']
})
export class FuelQuoteHistoryComponent implements OnInit {

  historyModel = new history("12", "03/02/2020", "111 Main", "03/20/2020", "2", "24");

  constructor() { }

  ngOnInit(): void {
  }

}
