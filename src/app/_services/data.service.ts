import { Injectable } from '@angular/core';
import { Appointment } from '../_models/appointment'
import { Appointments } from '../_mocks/mock-appointments'

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

  // TODO getter für die restlichen Mocks

  
}
