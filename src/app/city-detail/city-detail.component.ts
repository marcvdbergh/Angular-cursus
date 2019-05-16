import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/model/city.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  @Input() cityFromParent: City;

  @Output() rating = new EventEmitter<number>();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  rate(num: number): void {
    console.log('rating voor ', this.cityFromParent.name, ': ', num);
    this.rating.emit(num);
  }
  onClickOrder(city) {
    console.log(`Stedentripje geboekt voor:
			${this.cityFromParent.name}, voor EUR ${this.cityFromParent.price}`);
    this.orderService.Stream.next(city);
  }
}
