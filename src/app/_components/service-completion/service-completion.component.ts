import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Appointment } from '../../_models/appointment';
import { ServiceCompletion } from '../../_models/serviceCompletion'
import { Part } from '../../_models/part';
import { PARTLIST, PARTSLIST } from '../../_mocks/mock-part';

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
  partlist: Part[] = PARTLIST;
  units: string[];
  partCount: Number[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedId = 0;
    this.appointments = this.dataService.getAppointments();
    this.selectedAppointment = this.appointments[0];
    this.partCount = [0, 0, 0];
    this.units = [PARTSLIST[0].unit, PARTSLIST[1].unit, PARTSLIST[2].unit]
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

    console.log(this.partCount[0]);
    console.log(this.partCount[1]);
    console.log(this.partCount[2]);
  }


}
