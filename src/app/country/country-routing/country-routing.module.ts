import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from '../country-list/country-list.component';
import { SerachComponentComponent } from '../serach-component/serach-component.component';
import { CountryChartComponent } from '../country-chart/country-chart.component';


const routes: Routes = [
  {
    path: '',
    component: CountryListComponent
  },
  {
    path: 'searchCountry',
    component: SerachComponentComponent
  },
  {
    path: 'charts',
    component: CountryChartComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],

})
export class CountryRoutingModule { }
