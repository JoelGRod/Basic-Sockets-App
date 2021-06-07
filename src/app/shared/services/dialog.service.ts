import { Injectable } from '@angular/core';
// RXJS
import { Observable } from 'rxjs';
// Services
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// Interfaces
import { DialogData } from '../interfaces/shared-interfaces';
// Dialogs
import { GralDialogComponent } from '../components/gral-dialog/gral-dialog.component';
import { PasswordDialogComponent } from '../components/password-dialog/password-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog: MatDialog) { }

  public openGeneralDialog(data: DialogData): void {
    const dialogRef = this._dialog.open(GralDialogComponent, {
      width: '250px',
      data
    });
  }

  public openGeneralDialogResponse(data: DialogData): Observable<boolean> {
    const dialogRef = this._dialog.open(GralDialogComponent, {
      width: '250px',
      data
    });

    return dialogRef.afterClosed();
  }

  public openPasswordDialog(data: DialogData) {
    const dialogRef = this._dialog.open(PasswordDialogComponent, {
      width: '250px',
      data
    });

    return dialogRef.afterClosed();
  }
}
