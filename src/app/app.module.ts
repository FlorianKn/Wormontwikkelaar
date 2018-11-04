import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const appRoutes: Routes = [
  { path: 'warehouse', component: WarehouseViewComponent },
  { path: 'neworder', component: NewOrderComponent },
  { path: 'customers', component: CustomersComponent},
  { path: 'customerdetails', component: CustomerDetailComponent}
];

//import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseViewComponent,
    NewOrderComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    //HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
