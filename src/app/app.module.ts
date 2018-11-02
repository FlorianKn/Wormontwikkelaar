import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { NewOrderComponent } from './new-order/new-order.component';

const appRoutes: Routes = [
  { path: 'warehouse', component: WarehouseViewComponent },
  { path: 'neworder', component: NewOrderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WarehouseViewComponent,
    NewOrderComponent
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
