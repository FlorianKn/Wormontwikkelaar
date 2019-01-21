import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Appointment } from '../../_models/appointment';
import { ServiceCompletion } from '../../_models/serviceCompletion'

@Component({
  selector: 'app-service-completion',
  templateUrl: './service-completion.component.html',
  styleUrls: ['./service-completion.component.css']
})
export class ServiceCompletionComponent implements OnInit {

  selectedAppointment: Appointment;
  selectedId: number;
  appointments: Appointment[] = this.dataService.getAppointments();
  realTime: String;
  serviceDate: String;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedId = 0;
    this.appointments = this.dataService.getAppointments();
    this.selectedAppointment = this.appointments[0];
  }

  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
    console.log("crap");
  }

  serviceCompletion() {
    // TODO if input valid create service completion, delete (put into history?) appointment
    console.log(this.appointments[this.selectedId-1].id);
    console.log(this.serviceDate);
    console.log(this.realTime);
    this.selectedAppointment;

    var serviceCompletion = new ServiceCompletion();
    serviceCompletion.customer = this.selectedAppointment.customer;
  }


}
