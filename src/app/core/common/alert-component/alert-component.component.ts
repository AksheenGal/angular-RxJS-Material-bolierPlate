import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.scss']
})
export class AlertComponentComponent {

  title = 'Success';
  alertText: string;
  btnText = 'OK';
  constructor(
    public dialogRef: MatDialogRef<AlertComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.alertText = data.alertText;
    if (data.title) {
      this.title = data.title;
    }
    if (data.btnText) {
      this.btnText = data.btnText;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  closeClicked() {
    this.dialogRef.close();
  }

}
