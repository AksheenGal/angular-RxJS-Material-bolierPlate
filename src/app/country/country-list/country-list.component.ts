import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  listOfCountries: any[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.searchAllCountry().subscribe((res) => {
      this.listOfCountries = res.map(elem => elem.name);
    })
  }

}
