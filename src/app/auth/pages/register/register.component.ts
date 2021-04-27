import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Sweet Alert
import Swal from 'sweetalert2'
// Custom validators
import { FormValidatorsService } from 'src/app/shared/validators/form-validators.service';
// Services
import { AuthService } from '../../services/auth.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../../auth-styles.scss'
  ]
})
export class RegisterComponent {

  public form: FormGroup = this._fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(this._fvalidators.email_pattern)
    ], [
      this._email_validator
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    password2: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]
  }, {
    validators: [this._fvalidators.compare_passwords('password', 'password2')]
  });

  constructor(
    private _fb: FormBuilder,
    private _fvalidators: FormValidatorsService,
    private _auth_service: AuthService,
    private _router: Router,
    private _email_validator: EmailValidatorService
  ) { }

  is_field_invalid(field: string): boolean {
    return this.form.get(field)?.invalid!
      && this.form.get(field)?.touched!;
  }

  login(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    Object.keys(this.form.controls).forEach((key) => this.form.get(key)!.setValue(this.form.get(key)!.value.trim()));

    const { name, email, password } = this.form.value;

    this._auth_service.register(name, email, password)
      .subscribe(resp => {
        if (resp === true) {
          this._router.navigateByUrl('/auth/login');
          Swal.fire({
            icon: 'success',
            title: '',
            text: 'User created successfully'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.toString()
          })
        }
      });
  }

}
