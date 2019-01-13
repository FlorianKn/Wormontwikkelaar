import { Parts } from './parts';
import { Customer } from './customer';

export class Serviceproduct {

    id: number;
    name: string;
    description: string;
    customerId: number;
    serialNumber: string;
    purchaseDate: Date;
    // documents ??

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}
