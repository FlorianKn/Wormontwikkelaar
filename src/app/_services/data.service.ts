import { Injectable } from '@angular/core';
import { Appointment } from '../_models/appointment'
import { Appointments } from '../_mocks/mock-appointments'
import { SERVICECOMPLETIONLIST } from '../_mocks/mock-serviceCompletionList';
import { ServiceCompletion } from '../_models/serviceCompletion';

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

  getServiceCompletionList(): ServiceCompletion[] {
    return SERVICECOMPLETIONLIST;
  }

  // TODO getter für die restlichen Mocks

  
}
