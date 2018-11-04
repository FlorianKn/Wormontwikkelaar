import { Component, OnInit } from '@angular/core';
import { Appointment } from './appointment';
import { Appointments } from './mock-appointments';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  selectedAppointment: Appointment;
  appointments = Appointments;

  constructor() { }

  ngOnInit() {
  }
  onSelect(appointment: Appointment): void {
   this.selectedAppointment = appointment;
  }

}
