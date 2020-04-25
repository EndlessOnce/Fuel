import { Component } from '@angular/core';
import { Client } from './client'
import { NgForm } from '@angular/forms';
import { ClientService } from './client.service';
import { AuthService } from '../auth/auth.service';
@Component(
  {
    // Allows us to use the component
    selector: 'app-client-profile',
    // A relative path that will point to when Angular parses in
    templateUrl: './client-profile.component.html'

  }
)

export class ClientProfileComponent
{
  constructor(public clientService: ClientService, public authService: AuthService){ }

  ngOnInit() {
    this.authService.setAddress();
    this.authService.setCity();
    this.authService.setName();
    this.authService.setAddress();
  }
  userAddress = this.authService.getAddress();
  userCity = this.authService.getCity();
  userName = this.authService.getName();
  userZipcode = this.authService.getZipcode();



  states = ['AL', 'TX',
            'CA', 'FL'];

  model = new Client("Name", "111 Main", "Houston", this.states[0],"77042");

  submitted = false;

  newClient()
  {
      alert("Success");
      this.model = new Client(null,null,null,null,null);
  }
  onSubmit() {
    this.submitted = true;
    var email = this.authService.getEmail()
    console.log(this.model);

    this.clientService.client(email, this.model.name, this.model.address, this.model.city, this.model.state, this.model.zipcode, this.model.addressAlt);
    this.newClient();

   }
  // onSubmit(form: NgForm)
  // {
  //   console.log(form.value);
    // if(form.invalid)
    // {
    //   return;
    // }
    // this.clientService.client(form.value.name, form.value.address, form.value.city, form.value.state, form.value.zipcode, form.value.addressAlt);
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }


// }
