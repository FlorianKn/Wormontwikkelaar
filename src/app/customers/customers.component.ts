import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // for REST Api
import { Observable } from 'rxjs';
import { Geolocation } from '../geolocation';
import { Customers } from '../mock-customers';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = Customers;
  selectedCustomer: Customer;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSelect(customer: Customer): void {
    console.log(this.selectedCustomer);
    delete this.selectedCustomer;
    console.log(this.selectedCustomer);
    this.selectedCustomer = customer;
    console.log(this.selectedCustomer);
  }

}
