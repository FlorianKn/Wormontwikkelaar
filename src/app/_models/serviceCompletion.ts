import { Serviceproduct } from './serviceproduct';
import { Customer } from './customer';
import { Parts } from './Parts';

export class ServiceCompletion {
  id: number;
  customer: Customer; 
  serviceProduct: Serviceproduct; 
  serviceDate: string; // TODO Date Variable?
  realTimeRange: string; // TODO Time Range Variable?
  signature: string;
  usedServiceOrderItems: Parts[]; 
}