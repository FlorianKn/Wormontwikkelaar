import { Service } from './service';

export class Services {

  id: number;
  quantity: string;
  unit: string;
  service: Service;

  constructor(values: Object = {}) {
    this.service = new Service();
    Object.assign(this, values);
  }
}

