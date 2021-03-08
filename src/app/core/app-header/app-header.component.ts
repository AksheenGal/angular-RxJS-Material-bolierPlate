import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit(): void {
    this.state.headerTitle = 'Country Dashboard';
  }

  signOut() {
    this.state.setLogin(false);
  }

}
