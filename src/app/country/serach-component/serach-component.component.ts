import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/app.service';
import { StateService } from 'src/app/core/state.service';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-serach-component',
  templateUrl: './serach-component.component.html',
  styleUrls: ['./serach-component.component.scss']
})
export class SerachComponentComponent implements OnInit {
  countryInput: string
  countryData: any;
  constructor(private state: StateService, private countryService: CountryService, private appService: AppService) { }

  ngOnInit(): void {
    this.state.componentTitle = 'Search Country';
  }

  submit() {
    this.countryService.getCountryData(this.countryInput).subscribe(res => {
      this.countryData = res.length != 0 ? res[0] : 'Not Available';
    }, err => {
      this.appService.showSimpleAlert(err, 'Error');
    })
  }
}
