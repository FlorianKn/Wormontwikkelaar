import { Appointment } from '../appointments/appointment';
import { Technicians } from './mock-technician';
import { Serviceproducts } from './mock-serviceproduct';

export const Appointments: Appointment[] = [
  { description: 'Fixing server', 
    technician: Technicians[0], 
	serviceProduct: Serviceproducts[0], 
	customer: null, 
	plannedTime: 23, 
	plannedParts: null,
	plannedServices: null,
	creationDate: '01.11.2018', 
	dateTimeFrom: '05.11.2018', 
	dateTimeTo: '20.11.2018', 
	status: 0, // enum wird nicht gefunden: Status.Open 
	usedParts: null,
	usedServices: null,
	serviceDateTime: 'What?', 
	realDateFrom: '10.11.2018', 
	realDateTo: '30.11.2018'},

{ description: 'Fixing server', 
    technician: Technicians[1], 
	serviceProduct: Serviceproducts[1], 
	customer: null, 
	plannedTime: 23, 
	plannedParts: null,
	plannedServices: null,
	creationDate: '01.11.2018', 
	dateTimeFrom: '05.11.2018', 
	dateTimeTo: '20.11.2018', 
	status: 1, 
	usedParts: null,
	usedServices: null,
	serviceDateTime: 'What?', 
	realDateFrom: '10.11.2018', 
	realDateTo: '30.11.2018'}
];