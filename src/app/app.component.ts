import { Component, OnInit } from '@angular/core';
import { AppService } from './core/app.service';
import { LoginService } from './core/login/login.service';
import { StateService } from './core/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public loginService: LoginService, public state: StateService,
  public appService: AppService) { }
  ngOnInit(): void {
    this.state.resetLoginFromSession();
  }
}
