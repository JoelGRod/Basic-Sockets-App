import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

  public email_pattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public char_limit_300: string = "[\w]{1,300}";
  public phone: string = "\+?\(?\d{2,4}\)?[\d\s-]{3,}";
  public zip_code: string = "^\d{5,6}(?:[-\s]\d{4})?$";
  /* 
  * Strong Password: Only accept a string that has 1 uppercase alphabet, 
  * 1 lowercase alphabet, 2 digits and 1 special character. 
  * Also the minimum allowed length is 8 characters. 
  */
  public strong_password: string = "(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}";

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
