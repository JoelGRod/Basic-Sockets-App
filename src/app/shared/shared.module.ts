import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ErrMsgDirective } from './directives/err-msg.directive';



@NgModule({
  declarations: [
    FooterComponent,
    ErrMsgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ErrMsgDirective
  ]
})
export class SharedModule { }
