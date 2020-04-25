import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { GestureConfig } from '@angular/material/core';
import { Injectable } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {HistService} from '../services/fuelhistory.service';

export interface FuelHistory {
  gallons: string;
  orderdate: string;
  deladdress: string;
  deldate: string;
  suggestedprice: string;
  totalammount: string;

}
var Element_DATA: FuelHistory[] = [];

fetch("http://localhost:3200/history")
      .then(res => 
      {
         return (res.json());
      })
      .then(data => {
        var Element_DATA:FuelHistory[] = [];
        data.forEach(function(obj) 
        {
          var newElement:FuelHistory = {
          gallons:obj.gallons,
          orderdate:obj.orderdate,
          deladdress:obj.deladdress,
          deldate:obj.deldate,
          suggestedprice:obj.suggestedprice,
          totalammount:obj.totalammount,
          }
          Element_DATA.push(newElement);
          //console.log(Element_DATA);
    
        });
      });

//console.log(Element_D.length);
@Component({
  selector: 'app-fuel-quote-history',
  templateUrl: './fuel-quote-history.component.html',
  styleUrls: ['./fuel-quote-history.component.css']

})



export class FuelQuoteHistoryComponent implements OnInit {
  
  dataSource = new HistDataSource(this.histService);
  displayedColumns = ['gallons', 'orderdate','deladdress','deldate','suggestedprice','totalammount'];
   url = "http://localhost:3200/history";

  constructor(private histService:HistService) {}
  ngOnInit(): void {
    
   }

}
export class HistDataSource extends DataSource<any> {
  constructor(private histService: HistService) {
    super();
  }
  connect(): Observable<FuelHistory[]> {
    return this.histService.getHist()
  }
  disconnect() {}
}