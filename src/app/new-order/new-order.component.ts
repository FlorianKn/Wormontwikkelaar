import { Component, OnInit } from '@angular/core';
import { WarehouseOrder } from '../warehouse-order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  public orderList: WarehouseOrder[] = [
      { orderNumber: 1, description:'Bohrmaschine', status: 'Done', orderDate: '10.10.18', picUrl: 'https://images.obi.de/product/DE/1500x1500/668216_1.jpg' },
      { orderNumber: 2, description:'Schrauben von Würth', status: 'InProgress', orderDate: '28.10.18', picUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ZkphY8RaL._SL1500_.jpg' },
      { orderNumber: 3, description:'Schraubenschlüssel-Set', status: 'New', orderDate: '31.10.18', picUrl: 'https://www.hausjournal.net/wp-content/uploads/Schraubenschluessel-Groessen.jpg' }
  ];

  constructor() {

   }

  ngOnInit() {
  }

}
