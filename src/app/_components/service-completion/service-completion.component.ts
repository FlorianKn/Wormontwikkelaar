import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Appointment } from '../../_models/appointment';

@Component({
  selector: 'app-service-completion',
  templateUrl: './service-completion.component.html',
  styleUrls: ['./service-completion.component.css']
})
export class ServiceCompletionComponent implements OnInit {

  selectedAppointment: Appointment;
  appointments: Appointment[] = this.dataService.getAppointments();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.appointments = this.dataService.getAppointments();
    this.selectedAppointment = this.appointments[0];
  }

  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
  }

}
