import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { FormValidatorsService } from 'src/app/shared/validators/form-validators.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  public form: FormGroup = this._fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    contact_email: ['', [
      Validators.required,
      Validators.pattern(this._fvalidators.email_pattern)
    ]],
    subject: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    msg: ['', [
      Validators.required,
      Validators.minLength(3)
    ]]
  });
  
  constructor( 
    private _fb: FormBuilder,
    private _fvalidators: FormValidatorsService,
    private _home_service: HomeService
  ) { }

  send_message(): void {

    Object.keys(this.form.controls).forEach((key) => this.form.get(key)!.setValue(this.form.get(key)!.value.trim()));

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._home_service.send_contact_email(this.form.value)
      .subscribe( resp => {
        this.form.reset();
      });

  }

}
