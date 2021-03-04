import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
