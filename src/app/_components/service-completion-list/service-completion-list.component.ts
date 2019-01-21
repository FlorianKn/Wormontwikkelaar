import { Component, OnInit } from '@angular/core';
import { ServiceCompletion } from '../../_models/serviceCompletion';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-service-completion-list',
  templateUrl: './service-completion-list.component.html',
  styleUrls: ['./service-completion-list.component.css']
})
export class ServiceCompletionListComponent implements OnInit {

  serviceCompletionList: ServiceCompletion[] = this.dataService.getServiceCompletionList();
  selectedServiceCompletion: ServiceCompletion;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSelect(serviceCompletion: ServiceCompletion): void {
    this.selectedServiceCompletion = serviceCompletion;
  }

}
