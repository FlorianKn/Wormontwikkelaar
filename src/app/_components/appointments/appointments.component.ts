import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../_models/appointment';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  selectedAppointment: Appointment;
  appointments: Appointment[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
	  this.getAppointments();
  }
  
  getAppointments(): void {
	  this.appointments = this.dataService.getAppointments();
  }
  
  onSelect(appointment: Appointment): void {
   this.selectedAppointment = appointment;
  }

  getOpenAppointments(): void {}

  getFinishedAppointments(): void {}

  sortAppointmentsByDate(): void {}

}
