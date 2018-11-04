import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ServiceCompletionComponent } from './service-completion/service-completion.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'warehouse', component: WarehouseViewComponent },
    { path: 'neworder', component: NewOrderComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'appointmentdetails', component: AppointmentDetailsComponent },
    { path: 'servicecompletion', component: ServiceCompletionComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
