import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { WarehouseViewComponent } from './_components/warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './_components/new-order/new-order.component';
import { AppointmentDetailsComponent } from './_components/appointment-details/appointment-details.component';
import { AppointmentsComponent } from './_components/appointments/appointments.component';
import { ServiceCompletionComponent } from './_components/service-completion/service-completion.component';
import { CustomersComponent } from './_components/customers/customers.component';
import { CustomerDetailComponent } from './_components/customer-detail/customer-detail.component';
import { TasksNotesComponent } from './_components/tasks-notes/tasks-notes.component';
import { ServiceProductsComponent } from './_components/service-products/service-products.component';
import { ServiceCompletionListComponent } from './_components/service-completion-list/service-completion-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'warehouse', component: WarehouseViewComponent },
    { path: 'neworder', component: NewOrderComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'appointmentdetails', component: AppointmentDetailsComponent },
    { path: 'servicecompletion', component: ServiceCompletionComponent },
    { path: 'serviceproducts', component: ServiceProductsComponent },
    // { path: 'customers', component: CustomersComponent  },
    { path: 'customers/:customerId', component: CustomersComponent  },
    { path: 'customersWithoutParams', component: CustomersComponent  },
    { path: 'customerdetails', component: CustomerDetailComponent },
    { path: 'tasksNotes', component: TasksNotesComponent },
    { path: 'servicecompletionlist', component: ServiceCompletionListComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
