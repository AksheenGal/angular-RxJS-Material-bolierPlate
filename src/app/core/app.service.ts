import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponentComponent } from './common/alert-component/alert-component.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  showSpinner = false;

  constructor(public dialog: MatDialog) { }

  changeSpinner(show: boolean) {
    setTimeout(() => (this.showSpinner = show));
  }

  showSimpleAlert(text: string, title?: string, btnText?: string) {
    this.dialog.open(AlertComponentComponent, {
      data: {
        title: title,
        alertText: text,
        btnText: btnText,
      },
    });
  }
}
