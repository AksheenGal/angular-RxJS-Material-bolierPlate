import { NgModule } from "@angular/core";
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [MatFormFieldModule,MatInputModule,FormsModule, ReactiveFormsModule],
    exports: [AppHeaderComponent],
    entryComponents: [],
    declarations: [AppHeaderComponent, LoginComponent]
})
export class CoreModule { }