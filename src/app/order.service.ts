import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { City } from './shared/model/city.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  Stream: Subject<City>;
  constructor() {
    this.Stream = new Subject<City>();
  }
}
