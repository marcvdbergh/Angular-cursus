import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mijnnaam = 'M@rc';
  achternaam: string;
  showCities = true;
  ngOnInit() {
    console.log('App loaded');
    this.achternaam = 'vd Bergh';
  }
}
