import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
// Services
import { HomeService } from '../../services/home.service';
import { FormValidatorsService } from 'src/app/shared/validators/form-validators.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('formDirective') formDirective!: FormGroupDirective;

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
    private _home_service: HomeService,
    private _dialog_service: DialogService
  ) { }

  public is_field_invalid(field: string): boolean {
    return this.form.get(field)?.invalid!
      && this.form.get(field)?.touched!;
  }

  public send_message(): void {

    Object.keys(this.form.controls).forEach((key) => this.form.get(key)!.setValue(this.form.get(key)!.value.trim()));

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._home_service.send_contact_email(this.form.value)
      .subscribe( resp => {
        if(resp.ok) {
          this._dialog_service.openGeneralDialog({
            title: 'Message sent',
            icon: 'check',
            msg: 'Everything went well and your message has been sent'
          });
          this.formDirective.resetForm();
        } else {
          this._dialog_service.openGeneralDialog({
            title: 'Message not sent',
            icon: 'error',
            msg: 'There has been an error and your message has not been sent. Try it again later.'
          });
        }
      });
  }

}
