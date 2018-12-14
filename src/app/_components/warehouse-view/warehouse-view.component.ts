import { Component, OnInit } from '@angular/core';
import { Part } from '../../_models/part';
import { PARTSLIST } from '../../_mocks/mock-part';

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
