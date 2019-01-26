import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { Appointment } from '../../_models/appointment';
import { ServiceCompletion } from '../../_models/serviceCompletion'
import { Part } from '../../_models/part';
import { PARTLIST, PARTSLIST } from '../../_mocks/mock-part';
import { Serviceproduct } from '../../_models/serviceproduct';
import { ServiceCompletionListComponent } from '../service-completion-list/service-completion-list.component';
import { Parts } from '../../_models/parts';

@Component({
  selector: 'app-service-completion',
  templateUrl: './service-completion.component.html',
  styleUrls: ['./service-completion.component.css']
})
export class ServiceCompletionComponent implements OnInit {

  selectedAppointment: Appointment;
  selectedId: number;
  appointments: Appointment[] = this.dataService.getAppointments();
  realTime: string;
  serviceDate: string;
  partlist: Part[] = PARTLIST;
  units: string[];
  partCount: string[];
  serviceCompletionList: ServiceCompletion[] = this.dataService.getServiceCompletionList();
  sign: string;
  serviceCompletionObject: ServiceCompletion;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedId = 0;
    this.appointments = this.dataService.getAppointments();
    this.selectedAppointment = this.appointments[0];
    this.partCount = ['0', '0', '0'];
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
    console.log(this.partCount[0]);
    console.log(this.partCount[1]);
    console.log(this.partCount[2]);

    this.serviceCompletionObject = { 
      id: this.getNewServiceCompletionId(),
      customer: this.appointments[this.selectedId-1].customer,
      serviceProduct: this.appointments[this.selectedId-1].serviceProduct,
      serviceDate: this.serviceDate,
      realTimeRange: this.realTime,
      signature: this.sign,
      usedServiceOrderItems: this.getNewParts()                                 
    }

    this.serviceCompletionList.push(this.serviceCompletionObject);

    if ( this.appointments.length == this.selectedId) {
      this.dataService.setAppointments(this.appointments.slice(0, this.selectedId-1));
    } else {
      this.dataService.setAppointments(this.appointments.slice(0, this.selectedId-1).concat(this.appointments.slice(this.selectedId)));
    }

  }

  getNewServiceCompletionId(): number {
    return this.serviceCompletionList.length + 1;
  }

  getNewParts(): Parts[] {
    return [{ id: 1, quantity:  this.partCount[0], unit: 'Paket', part: PARTLIST[0] },
            { id: 2, quantity:  this.partCount[1], unit: 'Meter', part: PARTLIST[1] },
            { id: 3, quantity:  this.partCount[2], unit: 'Schrauben', part: PARTLIST[2] }]
  }


}
