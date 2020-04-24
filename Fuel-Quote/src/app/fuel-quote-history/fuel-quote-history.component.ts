import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { GestureConfig } from '@angular/material/core';
import { Injectable } from '@angular/core';
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
          console.log(Element_DATA);
    
        });
      });


@Component({
  selector: 'app-fuel-quote-history',
  templateUrl: './fuel-quote-history.component.html',
  styleUrls: ['./fuel-quote-history.component.css']

})



export class FuelQuoteHistoryComponent implements OnInit {
  ngOnInit(): void {
    
    
  }
  displayedColumns: string[] = ['gallons', 'orderdate', 'deladdress', 'deldate','suggestedprice','totalammount'];
  dataSource = Element_DATA;


  
  
  



}
