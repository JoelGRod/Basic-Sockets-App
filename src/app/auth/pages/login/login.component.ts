import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorsService } from '../../../shared/validators/form-validators.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../auth-styles.scss'
  ]
})
export class LoginComponent {

  public form: FormGroup = this._fb.group({
    email: ['test@test.com', [
      Validators.required, 
      Validators.pattern(this._fvalidators.email_pattern)] 
    ],
    password: ['123456', [
      Validators.required,
      Validators.minLength(6)
    ] ]
  });

  constructor(
      private _fb: FormBuilder,
      private _fvalidators: FormValidatorsService,
      private auth_service: AuthService
  ) { }

  is_field_invalid(field: string): boolean {
    return this.form.get(field)?.invalid! 
      && this.form.get(field)?.touched!;
  }

  login(): void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    Object.keys(this.form.controls).forEach((key) => this.form.get(key)!.setValue(this.form.get(key)!.value.trim()));

    const { email, password } = this.form.value;

    console.log(email, password);

    this.auth_service.login(email, password);

  }

}
