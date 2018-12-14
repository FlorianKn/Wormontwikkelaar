import { Injectable } from '@angular/core';
import { Serviceproduct } from '../_models/serviceproduct';
import { Serviceproducts } from '../_mocks/mock-serviceproducts';

@Injectable({
  providedIn: 'root'
})
export class ServiceproductService {

  constructor() { }

  getServiceproducts(): Serviceproduct[] {
    return Serviceproducts;
  }
}
