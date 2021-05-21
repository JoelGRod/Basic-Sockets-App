import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/shared-interfaces';


@Component({
  selector: 'app-gral-dialog',
  templateUrl: './gral-dialog.component.html',
  styleUrls: ['./gral-dialog.component.scss']
})
export class GralDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GralDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public exit(): void {
    this.dialogRef.close();
  }

  public exit_response(resp: boolean): void {
    this.dialogRef.close(resp);
  }

}
