
export class Appointment {
  description: string;
  technician: string; // TODO
  serviceProduct: string; // TODO
  customer: string; // TODO
  plannedTime: number; // hours?
  plannedPartsAndServices: string[]; // TODO different type
  creationDate: string;
  dateTimeFrom: string;
  dateTimeTo: string;
  status: string; // TODO enum
  usedPartsAndService: string[]; // TODO
  serviceDateTime: string;
  realDateFrom: string;
  realDateTo: string;
}