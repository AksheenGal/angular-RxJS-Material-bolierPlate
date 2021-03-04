import { Injectable } from '@angular/core';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private stateService: StateService) { }

  public isLogin() {
    return this.stateService.isLoggedIn;
  }
}
