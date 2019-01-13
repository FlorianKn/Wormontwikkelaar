import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WarehouseViewComponent } from './_components/warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './_components/new-order/new-order.component';
import { AppointmentsComponent } from './_components/appointments/appointments.component';
import { AppointmentDetailsComponent } from './_components/appointment-details/appointment-details.component';
import { ServiceCompletionComponent } from './_components/service-completion/service-completion.component';
import { CustomersComponent } from './_components/customers/customers.component';
import { CustomerDetailComponent } from './_components/customer-detail/customer-detail.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { AlertComponent } from './_components/alert/alert.component';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { TasksNotesComponent } from './_components/tasks-notes/tasks-notes.component';
import { ServiceProductsComponent } from './_components/service-products/service-products.component';



// import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseViewComponent,
    NewOrderComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    ServiceCompletionComponent,
    CustomersComponent,
    CustomerDetailComponent,
    TasksNotesComponent,
    ServiceProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing  ],
  exports: [
    AlertComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})

export class AppModule {}
