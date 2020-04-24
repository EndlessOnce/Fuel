import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppComponent } from './app.component';
import { FuelQuoteFormComponent } from './fuel-quote-form/fuel-quote-form.component';
import { FuelQuoteHistoryComponent } from './fuel-quote-history/fuel-quote-history.component';
import { AuthGuard } from './auth/auth.guard';
import { ClientProfileComponent } from './client-profile/client-profile.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'client-profile', component: ClientProfileComponent, canActivate: [AuthGuard]},
  {path: 'client-history', component: FuelQuoteHistoryComponent, canActivate: [AuthGuard]},
  {path: 'fuel-quote-form', component: FuelQuoteFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
