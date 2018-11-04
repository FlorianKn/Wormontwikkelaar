import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { ServiceCompletionComponent } from './service-completion/service-completion.component';

const appRoutes: Routes = [
  { path: 'warehouse', component: WarehouseViewComponent },
  { path: 'neworder', component: NewOrderComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointmentdetails', component: AppointmentDetailsComponent },
  { path: 'servicecompletion', component: ServiceCompletionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WarehouseViewComponent,
    NewOrderComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    ServiceCompletionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
