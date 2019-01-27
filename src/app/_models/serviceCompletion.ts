import { Serviceproduct } from './serviceproduct';
import { Customer } from './customer';
import { Parts } from './parts';

export class ServiceCompletion {
  id: number;
  customer: Customer; 
  serviceProduct: Serviceproduct; 
  serviceDate: string;
  realTimeRange: string;
  signature: string;
  usedServiceOrderItems: Parts[];
}