import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  public setLogin(value: boolean) {
    localStorage.setItem('Auth', value + '');
    this.isLoggedIn = value;
  }

  public resetLoginFromSession() {
    const login = localStorage.getItem('Auth');
    if (login && login === 'true') {
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['/login']);
      this.isLoggedIn = false;
    }
  }
}
