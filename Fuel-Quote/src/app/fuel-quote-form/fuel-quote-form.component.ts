import { Component } from '@angular/core';
import { QuoteForm } from './fuel-quote';
import { FuelQuoteService } from './fuel-quote.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-fuel-quote-form',
  templateUrl: './fuel-quote-form.component.html',
  styleUrls: ['./fuel-quote-form.component.css']
})


export class FuelQuoteFormComponent {
  address = ["111 Main"];

  quoteModel = new QuoteForm(null, new Date() , this.address[0], null, null);

  constructor(private _fuelQuoteService: FuelQuoteService, private authService: AuthService) {}

  ngOnInit(): void {
  }


  submitted = false;

  onSubmit() {
    var email = this.authService.getEmail();
    var price = (<HTMLInputElement>document.getElementById('price')).value;
    var total = (<HTMLInputElement>document.getElementById('total')).value;
    console.log(this.quoteModel.price);
    console.log(this.quoteModel.total);
    this._fuelQuoteService.quote(email, this.quoteModel.gallons, this.quoteModel.delivery, this.quoteModel.address, price, total);

  }

  priceModule() {
    var gallons = parseInt((<HTMLInputElement>document.getElementById('gallons')).value);
    var gallonsReq;
    if (gallons < 1000) {
        gallonsReq = 0.03;
    }
    else {
        gallonsReq = 0.02;
    }
    var date = new Date((<HTMLInputElement>document.getElementById('delivery')).value);
    var summer;
    if (date <= new Date('09/22/2020') && date >= new Date('06/20/2020')) {
        summer = 0.04;
    }
    else {
        summer = 0.03;
    }
    var history = 0.01;
    var location = 0.02;
    var suggestedPrice = 1.50 + (location - history + gallonsReq + 0.1 + summer) * 1.50;
    var total = gallons * suggestedPrice;
    (<HTMLInputElement>document.getElementById('price')).value = suggestedPrice.toString();
    (<HTMLInputElement>document.getElementById('total')).value = total.toString();
    (<HTMLInputElement>document.getElementById("submit")).disabled = false;

  }
}
