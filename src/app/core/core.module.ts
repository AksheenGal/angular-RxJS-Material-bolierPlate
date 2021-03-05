import { NgModule } from "@angular/core";
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [MatFormFieldModule,MatInputModule,FormsModule, ReactiveFormsModule,SharedModule],
    exports: [AppHeaderComponent, LeftNavComponent],
    entryComponents: [],
    declarations: [AppHeaderComponent, LoginComponent, LeftNavComponent]
})
export class CoreModule { }