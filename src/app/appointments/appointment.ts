import { Technician } from '../technician';
import { Serviceproduct } from '../serviceproduct';
import { Customer } from '../customer';
import { Parts } from '../parts';
import { Services } from '../services';

export class Appointment {
  description: string;
  technician: Technician; 
  serviceProduct: Serviceproduct; 
  customer: Customer; 
  plannedTime: number; // hours?
  plannedParts: Parts;
  plannedServices: Services;
  creationDate: string; // date variable?
  dateTimeFrom: string;
  dateTimeTo: string;
  status: Status;
  usedParts: Parts;
  usedServices: Services;
  serviceDateTime: string;
  realDateFrom: string;
  realDateTo: string;
}

enum Status {
  Open,
  Completed
}