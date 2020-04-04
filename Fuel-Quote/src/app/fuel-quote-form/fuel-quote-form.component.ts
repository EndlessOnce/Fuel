import { Component } from '@angular/core';
import { QuoteForm } from './fuel-quote';
import { FuelQuoteService } from './fuel-quote.service';

@Component({
  selector: 'app-fuel-quote-form',
  templateUrl: './fuel-quote-form.component.html',
  styleUrls: ['./fuel-quote-form.component.css']
})


export class FuelQuoteFormComponent {

  address = ["111 Main"];

  quoteModel = new QuoteForm(0, new Date() , this.address[0], 5, 0);

  constructor(private _fuelQuoteService: FuelQuoteService) {

  }

  ngOnInit(): void {
  }
  

  submitted = false;

  onSubmit() {
    this._fuelQuoteService.quote(this.quoteModel)
      .subscribe(
        data => console.log("Success!", data),
        error => console.error("Error!", error)
      )
    this.submitted = true;
  }
}