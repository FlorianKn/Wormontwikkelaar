import { Component, OnInit } from '@angular/core';
import { Serviceproducts } from '../../_mocks/mock-serviceproducts';
import { Serviceproduct } from '../../_models/serviceproduct';
import { Customer } from '../../_models/customer';
import { Customers } from '../../_mocks/mock-customers';

@Component({
  selector: 'app-service-products',
  templateUrl: './service-products.component.html',
  styleUrls: ['./service-products.component.css']
})
export class ServiceProductsComponent implements OnInit {
  serviceProducts: Serviceproduct[];

  constructor() { }
  ngOnInit() {
    this.serviceProducts = Serviceproducts;
  }

  getCustomerNameById(id: number): string {
    const index = Customers.findIndex(customer => customer.id === id);
    return Customers[index].name;
  }

//   export const Serviceproducts: Serviceproduct[] = [
//     {id: 1, name: 'Befestigung Regal', description: 'Regal an Wand festschrauben', customerId: 1,
//     serialNumber: 'SN0742836491', purchaseDate: new Date('January 31 2018 12:30')},
//     {id: 2, name: 'Holz kürzen', description: 'Ein Stück Holz kürzen', customerId: 2,
//     serialNumber: 'SN6392749292', purchaseDate: new Date('March 03 2018 08:00')}
// ];

  // ServiceProduct:
  // (Read only: Given by the system)
  // --------------------------------
  // number:String
  // serialNumber:String
  // name:String
  // description:String
  // purchaseDate:Date
  // customer:REF(Customer)
}
