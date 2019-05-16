import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitytripsComponent } from './citytrips/citytrips.component';

const routes: Routes = [
  { path: 'citytrips', component: CitytripsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
