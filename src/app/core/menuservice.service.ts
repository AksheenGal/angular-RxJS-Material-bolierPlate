import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus: MenuItem[] = [
    new MenuItem('All countries', 'home', '/home'),
    new MenuItem('Search country', 'search', '/home/searchCountry'),
    new MenuItem('Country Charts', 'stacked_bar_chart', '/home/charts')
  ]

  constructor() { }

  getMyMenuItems() {
    return this.menus;
  }
}

export class MenuItem {
  // name: string;
  // icon: string;
  // route: string;
  // roles: Role[];

  constructor(
    public name: string,
    public icon: string,
    public route: string,
  ) {}
}