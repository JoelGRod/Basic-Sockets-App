import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Sweet Alert
import Swal from 'sweetalert2'
// Custom validators
import { FormValidatorsService } from '../../../shared/validators/form-validators.service';
// Service
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
    email: ['', [
      Validators.required, 
      Validators.pattern(this._fvalidators.email_pattern)] 
    ],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ] ]
  });

  constructor(
      private _fb: FormBuilder,
      private _fvalidators: FormValidatorsService,
      private _auth_service: AuthService,
      private _router: Router
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

    this._auth_service.login(email, password)
      .subscribe(resp => {
        if(resp === true) {
          this._router.navigateByUrl('/chat');
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
