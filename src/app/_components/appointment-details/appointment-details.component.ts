import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../../_models/appointment';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  @Input() appointmentId: number;

  initialized: boolean = false;
  appointments: Appointment[] = this.dataService.getAppointments();
  selectedAppointment: Appointment;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.appointments = this.dataService.getAppointments();
    this.selectedAppointment = this.getAppointmentById(this.appointmentId);
    this.initialized = true;
  }

  ngOnChanges(){
    this.selectedAppointment = this.getAppointmentById(this.appointmentId);
  }

  getAppointmentById(id: number): Appointment {
    const index = this.appointments.findIndex(appointment => appointment.id === id);
    return this.appointments[index];
  }

}
