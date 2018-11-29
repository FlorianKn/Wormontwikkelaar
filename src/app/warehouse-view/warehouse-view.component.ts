import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { PARTSLIST } from '../mock-part';

@Component({
  selector: 'app-warehouse-view',
  templateUrl: './warehouse-view.component.html',
  styleUrls: ['./warehouse-view.component.css']
})
export class WarehouseViewComponent implements OnInit {
  // Parts: Part[];
  parts = PARTSLIST;

  constructor() { }

  ngOnInit() {
  }

}
