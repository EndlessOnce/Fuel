import { Component } from '@angular/core';
import {Client} from '../client'
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
  constructor() { }

  ngOnInit(): void {
  }

  states = ['AL', 'TX',
            'CA', 'FL'];

  model = new Client("Name", "111 Main", "Houston", this.states[0],"77042");

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}
