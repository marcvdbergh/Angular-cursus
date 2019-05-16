import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitytripsComponent } from './citytrips/citytrips.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityOrdersComponent } from './city-orders/city-orders.component';
import { CityService } from './city.service';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    CitytripsComponent,
    CityDetailComponent,
    CityOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CityService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
