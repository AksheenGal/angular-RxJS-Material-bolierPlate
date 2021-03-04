import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isLoggedIn: boolean = false;

  constructor() { }

  public setLogin(value: boolean) {
    localStorage.setItem('Auth', value + '');
    this.isLoggedIn = value;
  }

  public resetLoginFromSession() {
    const login = localStorage.getItem('Auth');
    if (login && login === 'true') { 
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
