import { Injectable } from '@angular/core';
import { Appointment } from '../_models/appointment'
import { Appointments } from './mock-appointments'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }
  
  getAppointments(): Appointment[] {
	  return Appointments;
  }
  
}
