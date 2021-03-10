import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { forkJoin } from 'rxjs';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss']
})
export class CountryChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Australia', 'Germany', 'Russia', 'Spain', 'Pakistan'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Australia', 'Germany', 'Russia', 'Spain', 'Pakistan'];
  public pieChartData: SingleDataSet = [300, 500, 100, 1, 1];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private countryService: CountryService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.countryService.getCountryDataForChart().subscribe(res => {
      const dataArray = res.map(elem => elem[0].population);
      this.barChartData = [{
        data: dataArray,
        label: 'Population'
      }];
      this.pieChartData = dataArray;
    });
  }

}
