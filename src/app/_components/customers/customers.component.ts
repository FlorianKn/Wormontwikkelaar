import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_models/data.service'; // for REST Api
import { Observable } from 'rxjs';
import { Geolocation } from '../../_models/geolocation';
import { Customers } from '../../_mocks/mock-customers';
import { Customer } from '../../_models/customer';
import {CustomerDetailComponent} from './../customer-detail/customer-detail.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = Customers;
  selectedCustomer: Customer;


  // constructor(private data: DataService) { }
  // inject the activatated route
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('customerId'));
      this.selectedCustomer = this.getCustomerById(+params.get('customerId'));
    });

    // this.selectedCustomer = this.getCustomerById(this.route.snapshot.params.customerId);
  }

  onSelect(customer: Customer): void {
    delete this.selectedCustomer;
    this.selectedCustomer = customer;
  }

  getCustomerById(id: number): Customer {
    const index = this.customers.findIndex(customer => customer.id === id);
    return Customers[index];
  }

}
