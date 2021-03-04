import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/login/login.service';
import { StateService } from './core/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public loginService: LoginService, private state: StateService) { }
  ngOnInit(): void {
    this.state.resetLoginFromSession();
  }
}
