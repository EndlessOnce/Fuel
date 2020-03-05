import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Always add in no components into the declartaions so that Angular knows what new components there are otherwise it won't read it at all
@NgModule({
  declarations: [
    AppComponent,
    ClientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
