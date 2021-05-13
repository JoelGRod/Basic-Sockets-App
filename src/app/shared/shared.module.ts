import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // Components
    FooterComponent,
    MainMenuComponent,
    // Directives
    ErrMsgDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    // Components
    FooterComponent,
    MainMenuComponent,
    // Directives
    ErrMsgDirective
  ]
})
export class SharedModule { }
