// city-orders.component.ts
import { Component, OnInit } from '@angular/core';
import { CityOrders } from '../shared/model/cityOrders';
import { OrderService } from '../order.service';
import { City } from '../shared/model/city.model';

@Component({
  selector: 'app-city-orders',
  templateUrl: './city-orders.component.html',
  styleUrls: ['./city-orders.component.css']
})
export class CityOrdersComponent implements OnInit {
  currentOrders: CityOrders[] = [];
  totalPrice = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.Stream.subscribe((city: City) => this.processOrder(city));
  }

  processOrder(city: City): void {
    console.log('Order voor city ontvangen: ', city);
    this.currentOrders.push(new CityOrders(city));
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = 0; // reset
    this.currentOrders.forEach((order: CityOrders) => {
      this.totalPrice += order.numBookings * order.city.price;
    });

    // OF: Gebruik de reduce-functie voor arrays
    // this.totalPrice = this.currentOrders
    //     .reduce((acc, order) => acc + order.numBookings * order.city.price, 0)
  }

  cancel() {
    this.currentOrders = [];
  }

  confirm() {
    // POST this.currentOrders.stringify()....etc.
    alert('TODO: order opslaan in database...');
  }
}