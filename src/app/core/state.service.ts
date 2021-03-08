import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isLoggedIn: boolean = false;
  headerTitle: string = '';
  componentTitle: string = 'All Conutries';

  constructor(private router: Router) { }

  public setLogin(value: boolean) {
    this.isLoggedIn = value;
    sessionStorage.setItem('Auth', value + '');
    if (value == false) { 
      this.router.navigate(['/login']);
    }
  }

  public resetLoginFromSession() {
    const login = sessionStorage.getItem('Auth');
    if (login && login === 'true') {
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['/login']);
      this.isLoggedIn = false;
    }
  }
}
