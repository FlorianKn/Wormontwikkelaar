import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Geolocation } from '../geolocation';
import { Customers } from '../mock-customers';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = Customers;
  
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  selectedCustomer: Customer;

  onSelect(customer: Customer): void{
    this.selectedCustomer = customer;
  }

}
