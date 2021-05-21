import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Profile } from 'src/app/auth/interfaces/interfaces';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent {

  public form: FormGroup = this._fb.group({
    nickname: ['', [Validators.required]]
  });

  constructor(
    private _dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public profiles: Profile[],
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

    this._dialogRef.close(this.form.value);
  }

}
