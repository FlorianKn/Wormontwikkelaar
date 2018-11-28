import { Injectable } from '@angular/core';
import { Serviceproduct } from '../serviceproduct';
import { Serviceproducts } from '../mock-serviceproducts';

@Injectable({
  providedIn: 'root'
})
export class ServiceproductService {

  constructor() { }

  getServiceproducts(): Serviceproduct[] {
    return Serviceproducts;
  }
}
