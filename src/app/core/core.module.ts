import { NgModule } from "@angular/core";
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponentComponent } from './common/alert-component/alert-component.component';
import { ChartsModule } from "ng2-charts";

@NgModule({
    imports: [MatFormFieldModule,MatInputModule,FormsModule, ReactiveFormsModule,SharedModule, HttpClientModule, ChartsModule],
    exports: [AppHeaderComponent, LeftNavComponent],
    entryComponents: [AlertComponentComponent],
    declarations: [AppHeaderComponent, LoginComponent, LeftNavComponent, AlertComponentComponent]
})
export class CoreModule { }