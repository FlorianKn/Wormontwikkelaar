import { Component, OnInit } from '@angular/core';
import { Appointment } from './appointment';
import { AppointmentService } from '../_services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  selectedAppointment: Appointment;
  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
	  this.getAppointments();
  }
  
  getAppointments(): void {
	  this.appointments = this.appointmentService.getAppointments();
  }
  
  onSelect(appointment: Appointment): void {
   this.selectedAppointment = appointment;
  }

}
