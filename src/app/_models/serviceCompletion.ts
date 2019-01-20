import { Serviceproduct } from './serviceproduct';
import { Customer } from './customer';
import { ServiceOrderItem } from './serviceOrderItem';

export class Appointment {
  id: number;
  customer: Customer; 
  serviceProduct: Serviceproduct; 
  serviceDate: string; // TODO Date Variable?
  realTimeRange: string; // TODO Time Range Variable?
  signature: ImageBitmap;
  usedServiceOrderItems: ServiceOrderItem; // TODO array
}