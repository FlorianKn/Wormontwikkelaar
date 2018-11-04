import { Geolocation } from './geolocation';

export class Customer {

    id: number;
    name: string;
    geolocation: Geolocation;
    phone: string;
    mail: string;
    web: string;
    address: string;
    //serviceProducts: serviceProducts;
    //serviceHistory: serviceHistory;
 
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }


}
