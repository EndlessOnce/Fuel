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

  constructor(private _fuelQuoteService: FuelQuoteService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.setAddress();
  }
  
  userAddress: string[] = this.authService.getAddress();

  quoteModel = new QuoteForm(null, null , null, null, null);

  
  

  submitted = false;

  onSubmit() {
    var email = this.authService.getEmail();
    var price = (<HTMLInputElement>document.getElementById('price')).value;
    var total = (<HTMLInputElement>document.getElementById('total')).value;
    this._fuelQuoteService.quote(email, this.quoteModel.gallons, this.quoteModel.delivery, this.quoteModel.address, price, total);
    window.location.reload();
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
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    console.log(date.getMonth());
    console.log(date.getDate());
    var summer = 0.03;
    if (date.getMonth() <= 8 && date.getDate() <= 22) {
      if (date.getMonth() >= 5 && date.getDate() >= 20) {
        summer = 0.04;
      }
    }
    var history = 0;
    if (this.authService.getHistory()) {
      history = 0.01;
    }
    var state = this.authService.getState();
    var location = 0.04;
    if (state == "TX") {
      location = 0.02;
    }
    var suggestedPrice = 1.50 + (location - history + gallonsReq + 0.1 + summer) * 1.50;
    var total = gallons * suggestedPrice;
    (<HTMLInputElement>document.getElementById('price')).value = suggestedPrice.toString();
    (<HTMLInputElement>document.getElementById('total')).value = total.toString();
    (<HTMLInputElement>document.getElementById("submit")).disabled = false;

  }
}
