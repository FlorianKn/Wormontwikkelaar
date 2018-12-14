import { Parts } from './parts';

export class WarehouseOrder {
  orderNumber: number;
  description: string;
  orderDate: String;
  parts: Parts;
  status: string;
  picUrl: string;

  constructor(values: Object = {}) {
    //this.parts = new Parts();
    Object.assign(this, values);
  }
}
