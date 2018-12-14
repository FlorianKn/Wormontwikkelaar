import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './login.component';
import { HomeComponent } from './../home/home.component';
import { RegisterComponent } from './../register/register.component';
import { WarehouseViewComponent } from './../warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './../new-order/new-order.component';
import { AppointmentDetailsComponent } from './../appointment-details/appointment-details.component';
import { AppointmentsComponent } from './../appointments/appointments.component';
import { ServiceCompletionComponent } from './../service-completion/service-completion.component';
import { CustomersComponent } from './../customers/customers.component';
import { CustomerDetailComponent } from './../customer-detail/customer-detail.component';
import { TasksNotesComponent } from './../tasks-notes/tasks-notes.component';
import { routing } from './../../app.routing';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, HomeComponent, RegisterComponent, WarehouseViewComponent,
         NewOrderComponent, AppointmentsComponent, AppointmentDetailsComponent, ServiceCompletionComponent,
         CustomersComponent, CustomerDetailComponent, TasksNotesComponent ],
      imports: [FormsModule, ReactiveFormsModule, routing, HttpClientModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
