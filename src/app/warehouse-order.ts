import { Parts } from './parts';

export class WarehouseOrder {
  orderNumber: number;
  description: string;
  orderDate: string;
  parts: Parts;

  constructor(values: Object = {}) {
    this.parts = new Parts();
    Object.assign(this, values);
  }
}
