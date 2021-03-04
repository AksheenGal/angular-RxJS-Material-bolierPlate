import { NgModule } from "@angular/core";
import { CountryListComponent } from './country-list/country-list.component';
import { CountryRoutingModule } from "./country-routing/country-routing.module";

@NgModule({
    imports: [CountryRoutingModule],
    exports: [],
    entryComponents: [],
    declarations: [CountryListComponent]
})
export class CountryModule { }