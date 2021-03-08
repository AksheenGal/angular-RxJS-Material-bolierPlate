import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
// import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    MaterialModule,
    // AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    MaterialModule
    // AppRoutingModule
  ],
  declarations: [

  ],
  providers: []
})
export class SharedModule {}
