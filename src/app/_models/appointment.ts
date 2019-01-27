import { User } from '../_models/user';
import { Serviceproduct } from './serviceproduct';
import { Customer } from './customer';
import { Parts } from './parts';

export class Appointment {
  // TODO should have a user/technician
  id: number;
  customer: Customer;
  serviceProduct: Serviceproduct;
  description: string;
  serviceDate: string; // TODO Date Variable?
  plannedTimeRange: string; // TODO Time Range Variable?
  serviceOrderItems: Parts[];
}

// TODO use this or delete
enum Status {
  Open,
  Completed
}
