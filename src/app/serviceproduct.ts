import { Parts } from './parts';

export class Serviceproduct {

    id: number;
    name : string;
    description: string;
    customerId: number;
    serialNumber: string;
    purchaseDate: Date;
    //documents ???
    bom: Parts;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}
