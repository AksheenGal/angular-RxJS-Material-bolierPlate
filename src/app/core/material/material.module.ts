import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
// import {
//   MatIconModule,
//   MatToolbarModule,
//   MatOptionModule,
//   MatSelectModule,
//   MatTabsModule,
//   MatProgressSpinnerModule,
//   MatCardModule,
//   MatDividerModule,
//   MatExpansionModule,
//   MatCheckboxModule,
//   MatDatepickerModule,
//   MatRadioModule,
//   MatSidenavModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatGridListModule
// } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    // MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    // MatOptionModule,
    // MatSelectModule,
    MatDialogModule,
    // MatTabsModule,
    // MatProgressSpinnerModule,
    // MatCardModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatCheckboxModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatGridListModule,
    // MatDatepickerModule,
    // MatRadioModule,
    // MatSidenavModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    // MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    // MatOptionModule,
    // MatSelectModule,
    MatDialogModule,
    // MatTabsModule,
    // MatProgressSpinnerModule,
    // MatCardModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatCheckboxModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatGridListModule,
    // MatDatepickerModule,
    // MatSidenavModule,
    // MatRadioModule
  ],
  declarations: []
})
export class MaterialModule {}
