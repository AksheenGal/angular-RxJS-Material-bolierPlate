import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menuservice.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  leftNavData: any;
  hideMe = [];
  hideSubMenu = [];

  constructor(   private state: StateService,
    private menuService: MenuService,
    public router: Router) { }

  ngOnInit(): void {
    this.setFirstTab();
    this.leftNavData = this.menuService.getMyMenuItems();
    if (this.leftNavData != undefined) {
      this.leftNavData = this.filterLeftNavData(this.leftNavData);
    }
  }

  setFirstTab() {
    let test = this.menuService.getMyMenuItems();
    test = this.filterLeftNavData(test);
    for (let i = 1; i < test.length; i++) {
      this.hideMe[i] = true;
      this.hideSubMenu[i] = true;
    }
    this.hideSubMenu[0] = true;
    this.hideMe[0] = false;
  }

  filterLeftNavData(allLeftNavData) {
    return allLeftNavData;
  }

  routeOrShowSubMenu(route, index) {
    console.log(route);
    if (route.route) {
      this.router.navigateByUrl(route.route);
      this.changeOfTab(index);
    } else {
      this.hideSubMenu[index] = !this.hideSubMenu[index];
    }
  }

  changeOfTab(index) {
    for (let i = 0; i < this.hideMe.length; i++) {
      if (i === index) {
        if (this.hideMe[i] !== false) {
          this.hideMe[index] = !this.hideMe[index];
        }
      } else {
        this.hideMe[i] = true;
      }
    }
  }

}
