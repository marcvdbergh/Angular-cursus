import { Component, OnInit } from '@angular/core';
import { City } from '../shared/model/city.model';
import { CityService } from '../city.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-citytrips',
  templateUrl: './citytrips.component.html',
  styleUrls: ['./citytrips.component.css']
})
export class CitytripsComponent implements OnInit {
  title: string;
  cities: City[];
  currentCity: City;
  showCities = true;
  newCity = '';
  newProvence = '';
  newCityPhoto = '';
  newRating = 0;
  newId = 0;
  newHighlights = [];
  procinceLetters = ['DR', 'FL', 'FR', 'GE', 'GR', 'LB', 'NB', 'NH', 'OV', 'UT', 'ZH', 'ZL'];

  constructor(private cityService: CityService) { }
  ngOnInit() {
    this.title = 'whatever';
    this.cityService.getCities().subscribe(data => this.cities = data);
  }
  onClickCity(event, city: City) {
    console.log('City clicked: ' + city.name);
    this.currentCity = city;
    this.newCity = this.currentCity.name;
    this.newProvence = this.currentCity.province;
    this.newId = this.currentCity.id;
    this.newRating = this.currentCity.rating;
    this.newHighlights = this.currentCity.highlights;
    this.newCityPhoto = `assets/img/${this.currentCity.name}.jpg`;
    event.preventDefault();
  }
  changeCity(value: string) {
    this.newCity = `toegevoegd: ${value}`;
  }
  onClickSaveCity() {
    const addedCity = new City(
      this.newId,
      this.newCity,
      this.newProvence,
      this.newRating,
      this.price,
      this.newHighlights
    );
    if (this.newId === 0) {
      this.cityService.addCity(addedCity).subscribe(thisCity => {
        this.cityService.getCities().subscribe(data => this.cities = data);
      });
    } else {
      this.cityService.updateCity(addedCity).subscribe(thisCity => {
        this.cityService.getCities().subscribe(data => this.cities = data);
      });
    }
    this.newCity = '';
    this.newProvence = '';
  }
  onClickDelCity() {
    this.cityService.deleteCity(this.newId).subscribe(done => {
      this.cityService.getCities().subscribe(data => this.cities = data);
    });
  }
  onClickNewCity() {
    this.newId = 0;
    this.newCity = '';
    this.newProvence = '';
    this.newRating = 0;
    this.newHighlights = [];
  }

  updateRating(rating: number): void {
    this.currentCity.rating += rating;
    this.cityService.updateCity(this.currentCity).subscribe(thisCity => {
      this.cityService.getCities().subscribe(data => this.cities = data);
    });
  }
}
