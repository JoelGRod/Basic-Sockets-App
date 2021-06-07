import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/shared-interfaces';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent {

  public form: FormGroup = this._fb.group({
    new_password: ['', [Validators.required]],
    old_password: ['']
  });

  constructor(
    private _dialogRef: MatDialogRef<PasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _fb: FormBuilder
  ) {}

  exit(): void {
    this._dialogRef.close();
  }

  send_data(): void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if(!this.data.has_password){
      const new_password = this.form.get('new_password')!.value;
      const old_password = '';
      this._dialogRef.close({new_password, old_password});
    } 
    else {
      const new_password = this.form.get('new_password')!.value;
      const old_password = this.form.get('old_password')!.value;
      this._dialogRef.close({new_password, old_password});
    }
  }

}
