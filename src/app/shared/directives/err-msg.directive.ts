import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective {

  private _error: string = '';
  @Input() set error(error: ValidationErrors | null | undefined) {
    if(error?.required) {
      this._el.nativeElement.innerText = "This field is required";
    } else if(error?.pattern) {
      this._el.nativeElement.innerText = "Invalid Input";
    } else if(error?.email_exists) {
      this._el.nativeElement.innerText = "Email already exists";
    } else if(error?.minlength) {
      this._el.nativeElement.innerText = `Field min length is: ${error?.minlength.requiredLength}`;
    } else if(error?.not_equals) {
      this._el.nativeElement.innerText = `Passwords do not match`;
    }
  }

  private _show_error: boolean = false;
  @Input() set show_error(value: boolean) {
    if(value) this._el.nativeElement.classList.remove('hidden');
    else this._el.nativeElement.classList.add('hidden');
  }

  constructor(private _el: ElementRef<HTMLElement>) { }

}
