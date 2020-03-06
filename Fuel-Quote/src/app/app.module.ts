import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuelQuoteFormComponent } from './fuel-quote-form/fuel-quote-form.component';
import { FuelQuoteHistoryComponent } from './fuel-quote-history/fuel-quote-history.component';
// Always add in no components into the declartaions so that Angular knows what new components there are otherwise it won't read it at all
@NgModule({
  declarations: [
    AppComponent,
    ClientProfileComponent,
    FuelQuoteFormComponent,
    FuelQuoteHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
