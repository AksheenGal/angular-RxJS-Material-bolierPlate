import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  showSpinner = false;

  constructor() { }

  changeSpinner(show: boolean) {
    setTimeout(() => (this.showSpinner = show));
  }
}
