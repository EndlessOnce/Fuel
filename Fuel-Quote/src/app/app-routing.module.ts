import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FuelQuoteFormComponent } from './fuel-quote-form/fuel-quote-form.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { FuelQuoteHistoryComponent } from './fuel-quote-history/fuel-quote-history.component';


const routes: Routes = [
  {path: 'client-profile', component: ClientProfileComponent},
  {path: 'client-history', component: FuelQuoteHistoryComponent},
  {path: 'fuel-quote-form', component: FuelQuoteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
