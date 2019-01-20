import { Injectable } from '@angular/core';
import { Customer } from '../_models/customer';
import { Serviceproduct } from '../_models/serviceproduct';
import { Serviceproducts } from '../_mocks/mock-serviceproducts';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductsService {
  mockServProd = Serviceproducts;

  getServiceProducts(criteria: ServiceProductSearchCriteria): Serviceproduct[] {
    return this.mockServProd.sort((a, b) => {
      if (typeof(a[criteria.sortColumn]) === 'number' || a[criteria.sortColumn] instanceof Date) {
        if (criteria.sortDirection === 'desc') {
        return a[criteria.sortColumn] - b[criteria.sortColumn];
        } else {
          return b[criteria.sortColumn] - a[criteria.sortColumn];
        }
      } else if (typeof(a[criteria.sortColumn]) === 'string') {
        if (criteria.sortDirection === 'desc') {
          if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
            return -1;
          } else if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
            return -1;
          } else if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    });
  }
}

export class ServiceProductSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}

// id: number;
// name: string;
// description: string;
// customerId: number;
// serialNumber: string;
// purchaseDate: Date;
