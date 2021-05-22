import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent {

  public form: FormGroup = this._fb.group({
    password: ['', [Validators.required]]
  });

  constructor(
    private _dialogRef: MatDialogRef<PasswordDialogComponent>,
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

    this._dialogRef.close(this.form.get('password')!.value);
  }

}
