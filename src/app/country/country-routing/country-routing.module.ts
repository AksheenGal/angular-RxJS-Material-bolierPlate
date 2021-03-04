import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from '../country-list/country-list.component';


const routes: Routes = [
  {
    path: '',
    component: CountryListComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],

})
export class CountryRoutingModule { }
