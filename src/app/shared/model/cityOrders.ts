import { City } from './city.model';

export class CityOrders {
    constructor(
        public city: City,
        public numBookings: number = 1
    ) { }
}
