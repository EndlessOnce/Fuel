import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SignupComponent } from './auth/signup/signup.component';
import { FuelQuoteFormComponent } from './fuel-quote-form/fuel-quote-form.component';
import { FuelQuoteHistoryComponent } from './fuel-quote-history/fuel-quote-history.component';
import { AuthIncerceptor } from './auth/auth-interceptor';
import {MatTableModule} from '@angular/material/table';
import {HistService} from './services/fuelhistory.service';
// Always add in no components into the declartaions so that Angular knows what new components there are otherwise it won't read it at all
@NgModule({
  declarations: [
    AppComponent,
    ClientProfileComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FuelQuoteFormComponent,
    FuelQuoteHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthIncerceptor, multi: true
  },
  [HistService]
],
  bootstrap: [AppComponent]
})
export class AppModule { }
