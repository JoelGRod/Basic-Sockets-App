import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-profile-dialog',
  templateUrl: './create-profile-dialog.component.html',
  styleUrls: ['./create-profile-dialog.component.scss']
})
export class CreateProfileDialogComponent {

  public form: FormGroup = this._fb.group({
    nickname:     ['', [Validators.required]],
    desc:         ['One more profile', [Validators.required]],
    photo:        ['A profile photo...', [Validators.required]]
  });

  constructor(
    private _dialogRef: MatDialogRef<CreateProfileDialogComponent>,
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
