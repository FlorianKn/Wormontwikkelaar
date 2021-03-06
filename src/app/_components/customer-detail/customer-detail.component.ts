import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../_models/customer';
import { Customers } from '../../_mocks/mock-customers';
import { Geolocation } from '../../_models/geolocation';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customerId: number;
  latitude: Number;
  longitude: Number;

  initialized: boolean = false;

  map: any;
  public selectedCustomer: Customer;
  constructor() { }

  ngOnInit() {
    this.selectedCustomer = this.getCustomerById(this.customerId);
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
          center: ol.proj.fromLonLat([this.longitude, this.latitude]),
          zoom: 15
        })
      });

  this.initialized = true;  

  } 
  
  // will be executed every time one or more data-bound input properties change
  ngOnChanges(){
    // map should only be relocated after initialy setting the center in ngOnInit()
    // otherwise map is not initialized and a null pointer exception occures
    this.selectedCustomer = this.getCustomerById(this.customerId);
    if(this.initialized)
      this.setCenter(this.selectedCustomer.geolocation)
  }

  // update central position of the map
  setCenter(geo: Geolocation) {
    const view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([geo.lng, geo.lat]));
    view.setZoom(15);
  }

  getCustomerById(id: number): Customer {
    const index = Customers.findIndex(customer => customer.id === id);
    return Customers[index];
  }

}
