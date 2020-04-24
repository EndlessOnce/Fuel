import { Component } from '@angular/core';
import { Client } from './client'
import { NgForm } from '@angular/forms';
import { ClientService } from './client.service';
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
  constructor(private clientService: ClientService){ }

  ngOnInit(): void {
  }

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
    console.log(this.model);
    this.clientService.client(name, this.model.address, this.model.city, this.model.state, this.model.zipcode, this.model.addressAlt);
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
