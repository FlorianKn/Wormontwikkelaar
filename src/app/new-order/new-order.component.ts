import { Component, OnInit } from '@angular/core';
import { WarehouseOrder } from '../warehouse-order';
import { Parts } from '../parts';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

 parts: Parts;

  public orderList: WarehouseOrder[] = [
      { orderNumber: 1, description:'Bohrmaschine', status: 'Done', orderDate: '10.10.18', picUrl: 'https://images.obi.de/product/DE/1500x1500/668216_1.jpg', parts: this.parts },
      { orderNumber: 2, description:'Schrauben von Würth', status: 'InProgress', orderDate: '28.10.18', picUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ZkphY8RaL._SL1500_.jpg' , parts: this.parts},
      { orderNumber: 3, description:'Schraubenschlüssel-Set', status: 'New', orderDate: '31.10.18', picUrl: 'https://www.hausjournal.net/wp-content/uploads/Schraubenschluessel-Groessen.jpg', parts: this.parts }
  ];

  constructor() {

   }

   newOder() {
     let wo = new WarehouseOrder();

     var description = (<HTMLInputElement>document.getElementById("Beschreibung")).value;
     var part = (<HTMLInputElement>document.getElementById("Part")).value;

     wo.orderNumber = this.orderList.length + 1;
     wo.description = description;
     wo.status = "New";
     wo.orderDate = this.getDate();
     wo.parts = this.parts;

     if(part == "Schrauben"){
       wo.picUrl = "https://images-na.ssl-images-amazon.com/images/I/81ZkphY8RaL._SL1500_.jpg";
     } else if(part == "Zange") {
       wo.picUrl = "https://www.sonderpreis-baumarkt.de/media/image/6d/ef/5e/4410-BGS-Kombizange-Zange-Werkzeug-165-mm_600x600.jpg";
     } else {
       wo.picUrl = "https://www.priggen.com/media/image/product/632/md/koerperspannungs-messgeraet-mit-handelektrode-und-erdungskabel.jpg";
     }

     this.orderList.push(wo);
   }

  ngOnInit() {
  }

  getDate(){
    var today = Date.now();
    var date=new Date(today);

    return date.toString();
  }
}
