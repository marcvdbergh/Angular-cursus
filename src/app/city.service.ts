import { Injectable } from '@angular/core';
import { City } from './shared/model/city.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private url = 'http://localhost:3000/cities';

  constructor(private http: HttpClient) { }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }
  getCity(id: number): Observable<City> {
    console.log('getCity called');
    return this.http.get<City>(`{this.url}/$id`);
  }

  addCity(newCity: City): Observable<City> {
    console.log('addCity called');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<City>(this.url, newCity, { headers });
  }

  deleteCity(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateCity(updatedCity: City): Observable<City> {
    console.log('updateCity called');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<City>(`${this.url}/${updatedCity.id}`, updatedCity, { headers });
  }
}
