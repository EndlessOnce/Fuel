import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
// Always add in no components into the declartaions so that Angular knows what new components there are otherwise it won't read it at all
@NgModule({
  declarations: [
    AppComponent,
    ClientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
