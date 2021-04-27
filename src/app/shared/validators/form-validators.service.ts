import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

  public email_pattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public compare_passwords( field1: string, field2: string ) {
    return (form_group: AbstractControl): ValidationErrors | null => {
      const password_1: string = form_group.get(field1)?.value;
      const password_2: string = form_group.get(field2)?.value;

      if( password_1 !== password_2 ) {
        form_group.get(field2)?.setErrors({not_equals: true});
        return {not_equals: true};
      } else {
        form_group.get(field2)?.setErrors(null);
        return null;
      }
    }
  }
}
