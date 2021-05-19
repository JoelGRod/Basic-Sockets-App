import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.scss']
})
export class CreateRoomDialogComponent {

  public pura_caca: string = "caca";

  public form: FormGroup = this._fb.group({
    room_name:    ['', [Validators.required]],
    desc:         ['One more room', [Validators.required]],
    photo:        ['A room photo...', [Validators.required]],
    password:     [''],
    has_password: [false]
  });

  constructor(
    private _dialogRef: MatDialogRef<CreateRoomDialogComponent>,
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
