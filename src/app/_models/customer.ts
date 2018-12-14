import { Geolocation } from './geolocation';

export class Customer {

    id: number;
    name: string;
    geolocation: Geolocation;
    phone: string;
    mail: string;
    web: string;
    address: string;
    // ID Lists
    serviceProducts: number[] = [];
    serviceHistory: number[] = [];
 
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }


}
