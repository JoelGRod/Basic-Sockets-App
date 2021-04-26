import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorsService } from 'src/app/shared/validators/form-validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../../auth-styles.scss'
  ]
})
export class RegisterComponent {

  public form: FormGroup = this._fb.group({
    name: ['test', [
      Validators.required,
      Validators.minLength(3)
    ]],
    email: ['test@test.com', [
      Validators.required, 
      Validators.pattern(this._fvalidators.email_pattern)
    ]],
    password: ['123456', [
      Validators.required,
      Validators.minLength(6)
    ]]
  });

  constructor(
      private _fb: FormBuilder,
      private _fvalidators: FormValidatorsService
  ) { }

  is_field_valid(field: string): boolean {
    return this.form.get(field)?.invalid! 
      && this.form.get(field)?.touched!;
  }

  login(): void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    Object.keys(this.form.controls).forEach((key) => this.form.get(key)!.setValue(this.form.get(key)!.value.trim()));

    const { name, email, password } = this.form.value;

    console.log(name, email, password);

  }

}
