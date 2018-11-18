import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { Customers } from '../mock-customers';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customerId: number;
  latitude: Number;
  longitude: Number;

  map: any;
  public selectedCustomer: Customer;
  constructor() { }

  ngOnInit() {
    console.log(this.customerId);
    this.selectedCustomer = this.getCustomerById(this.customerId);
    console.log(this.selectedCustomer);
    this.latitude = this.selectedCustomer.geolocation.lat;
    this.longitude = this.selectedCustomer.geolocation.lng;
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });
  }

  getCustomerById(id: number): Customer {
    const index = Customers.findIndex(customer => customer.id === id);
    return Customers[index];
  }
}
