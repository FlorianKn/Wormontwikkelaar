import { User } from '../_models/user';
import { Serviceproduct } from './serviceproduct';
import { Customer } from './customer';
import { Parts } from './parts';
import { Services } from './services';
import { ServiceOrderItem } from './serviceOrderItem';

export class Appointment {
  id: number;
  customer: Customer;
  serviceProduct: Serviceproduct;
  serviceDate: string; // TODO Date Variable?
  plannedTimeRange: string; // TODO Time Range Variable?
  serviceOrderItems: ServiceOrderItem;

/*
  description: string;
  technician: User;
  plannedTime: number; // hours?
  plannedParts: Parts;
  plannedServices: Services;
  creationDate: string; // date variable?
  dateTimeFrom: string;
  dateTimeTo: string;
  status: Status;
  usedParts: Parts;
  usedServices: Services;
  realDateFrom: string;
  realDateTo: string; */
}

enum Status {
  Open,
  Completed
}
