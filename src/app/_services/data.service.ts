import { Injectable } from '@angular/core';
import { Appointment } from '../_models/appointment'
import { Appointments } from '../_mocks/mock-appointments'
import { ServiceOrderItem } from '../_models/serviceOrderItem';
import { ServiceOrderItems } from '../_mocks/mock-serviceOrderItem';

@Injectable({
  providedIn: 'root'
})

// Service to retrieve the mocks
// The mocks may later be replaced by a REST service
export class DataService {

  constructor() { }
  
  getAppointments(): Appointment[] {
	  return Appointments;
  }

  getServiceOrderItems(): ServiceOrderItem[] {
    return ServiceOrderItems;
  }

  // TODO getter für die restlichen Mocks

  
}
