import { Component, OnInit } from '@angular/core';
import { Serviceproduct } from '../../_models/serviceproduct';
import { Customer } from '../../_models/customer';
import { Customers } from '../../_mocks/mock-customers';
import { ServiceProductsService, ServiceProductSearchCriteria } from 'src/app/_services/service-products.service';

@Component({
  selector: 'app-service-products',
  templateUrl: './service-products.component.html',
  styleUrls: ['./service-products.component.css']
})
export class ServiceProductsComponent implements OnInit {
  serviceProducts: Serviceproduct[];

  constructor(private service: ServiceProductsService) { }
  ngOnInit() {
    this.getServiceProducts({sortColumn: 'id', sortDirection: 'asc'});
  }

  getCustomerNameById(id: number): string {
    const index = Customers.findIndex(customer => customer.id === id);
    return Customers[index].name;
  }

  getServiceProducts(criteria: ServiceProductSearchCriteria) {
    this.serviceProducts = this.service.getServiceProducts(criteria);
 }

 onSorted($event) {
   this.getServiceProducts($event);
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
