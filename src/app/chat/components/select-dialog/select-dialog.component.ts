import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent {

  public form: FormGroup = this._fb.group({
    room_name:    ['', [Validators.required]],
    desc:         ['One more room', [Validators.required]],
    photo:        ['A room photo...', [Validators.required]],
    password:     [''],
    has_password: [false]
  });

  constructor(
    private _dialogRef: MatDialogRef<SelectDialogComponent>,
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
