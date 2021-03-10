import { NgModule } from "@angular/core";
import { CountryListComponent } from './country-list/country-list.component';
import { CountryRoutingModule } from "./country-routing/country-routing.module";
import { SerachComponentComponent } from './serach-component/serach-component.component';
import { CountryChartComponent } from './country-chart/country-chart.component';
import { SharedModule } from "../core/shared/shared.module";
import { ChartsModule } from "ng2-charts";

@NgModule({
    imports: [CountryRoutingModule, SharedModule, ChartsModule],
    exports: [],
    entryComponents: [],
    declarations: [CountryListComponent, SerachComponentComponent, CountryChartComponent]
})
export class CountryModule { }