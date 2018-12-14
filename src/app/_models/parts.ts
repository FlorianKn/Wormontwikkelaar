import { Part } from './part';

export class Parts {
  id: number;
  quantity: string;
  unit: string;
  part: Part;

  constructor(values: Object = {}) {
    this.part = new Part();
    Object.assign(this, values);
  }
}
