import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { ClientModel } from './client.model';

@Injectable({ providedIn: "root" })
export class ClientService
{
  constructor(private http: HttpClient)
  {
  }
    client (name: string, address: string, city: string, state: string, zipcode: string, addressAlt: string)
    {
     const clientModel: ClientModel = {name: name, address: address, city: city, state: state, zipcode: zipcode, addressAlt: addressAlt};
     this.http.post("http://localhost:3000/api/client/clientForm", clientModel)
     .subscribe(response => {
       console.log(response);
     });
    }
}
